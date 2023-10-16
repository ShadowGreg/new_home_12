import React from "react"

export function MainPage() {

    return (
        <div className="flex mx-5 items-baseline text-amber-50">
            <iframe className="flex w-full h-screen"
                src="https://news.ru/"
                title="External Webpage"
            />
        </div>
    );
};

