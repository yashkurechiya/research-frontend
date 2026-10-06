"use client";

import React, { useEffect, useRef, useState } from "react";
import ResearchCard from "./researchCard";

const Research = () => {
    const [ra, setRa] = useState([]);

    const [nameSearch, setNameSearch] = useState("");
    const [citySearch, setCitySearch] = useState("");

    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const observerRef = useRef(null);

    const getRA = async (pageNumber) => {
        try {
            setLoading(true);

            const params = new URLSearchParams();

            // Search parameters
            if (nameSearch) {
                params.append("name", nameSearch);
            }

            if (citySearch) {
                params.append("city", citySearch);
            }

            // Pagination parameters
            params.append("page", pageNumber);
            params.append("limit", 6);

            const response = await fetch(
                `http://localhost:5000/research-analyst/getResearchAnalyst?${params.toString()}`
            );

            const result = await response.json();
            console.log(result);


            if (pageNumber === 1) {
                setRa(result.data);
            } else {
                setRa((previous) => [
                    ...previous,
                    ...result.data
                ]);
            }

            setHasMore(result.pagination.hasMore);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    // Search changed
    useEffect(() => {
        setPage(1);
        setRa([]);
        setHasMore(true);

        getRA(1);
    }, [nameSearch, citySearch]);

    // Load next page
    useEffect(() => {
        if (page === 1) {
            return;
        }

        getRA(page);
    }, [page]);

    // Infinite scroll
    useEffect(() => {
        const element = observerRef.current;

        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const firstEntry = entries[0];

                if (
                    firstEntry.isIntersecting &&
                    hasMore &&
                    !loading
                ) {
                    setPage((previousPage) => previousPage + 1);
                }
            },
            {
                threshold: 0.1
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [hasMore, loading]);

    return (
        <div className="my-20 min-w-7xl ">

            {/* Search */}
            <div className="mx-10 flex gap-10">

                <div>
                    <h2 className="text-zinc-500 mb-2">
                        Search by name
                    </h2>

                    <input
                        type="text"
                        value={nameSearch}
                        onChange={(e) => setNameSearch(e.target.value)}
                        className="w-70 h-10 p-3 bg-white rounded-xl"
                        placeholder="e.g. Raghav Malik"
                    />
                </div>

                <div>
                    <h2 className="text-zinc-500 mb-2">
                        Search by city
                    </h2>

                    <input
                        type="text"
                        value={citySearch}
                        onChange={(e) => setCitySearch(e.target.value)}
                        className="w-70 h-10 p-3 bg-white rounded-xl"
                        placeholder="e.g. Kolkata"
                    />
                </div>

            </div>

            {/* Cards */}
            <div className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 p-6 lg:w-[70%] md:w-[80%] w-[90%]">
                {ra
                    ?.filter((analyst) => analyst.completed_request !== "removed")
                    .map((analyst) => (
                        <ResearchCard
                            key={analyst.regNo}
                            type={analyst.type}
                            name={analyst.name}
                            city={analyst.city}
                            regNo={analyst.regNo}
                            signalz={analyst.signalz}
                        />
                    ))}

                {ra.length === 0 && !loading && (
                    <p className="col-span-full text-center text-zinc-500 mt-10">
                        No analysts found.
                    </p>
                )}

            </div>

            {/* Loading */}
            {loading && (
                <div className="w-full max-w-sm animate-pulse space-y-2 py-2">
                    <div className="h-4 rounded bg-gray-200 w-3/4"></div>
                </div>
            )}

            {/* Intersection observer target */}
            <div
                ref={observerRef}
                className="h-10"
            />

            {/* End */}
            {!hasMore && ra.length > 0 && (
                <p className="text-center text-zinc-500 py-5">
                    No more analysts
                </p>
            )}

        </div>
    );
};

export default Research;