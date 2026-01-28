export default function CommunityChampions() {
    const champions = [
        { name: "Champion 1", avatar: "C", displayName: "Champion 1" },
        { name: "Champion 2", avatar: "C", displayName: "Champion 2" },
        { name: "Champion 3", avatar: "C", displayName: "Champion 3" },
        { name: "Champion 4", avatar: "C", displayName: "Champion 4" },
        { name: "Champion 5", avatar: "C", displayName: "Champion 5" },
        { name: "Champion 6", avatar: "C", displayName: "Champion 6" },
        { name: "Champion 7", avatar: "C", displayName: "Champion 7" },
        { name: "Champion 8", avatar: "C", displayName: "Champion 8" },
        { name: "Champion 9", avatar: "C", displayName: "Champion 9" },
        { name: "Champion 10", avatar: "C", displayName: "Champion 10" },
    ];

    const colors = [
        "bg-blue-500",
        "bg-purple-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-red-500",
        "bg-indigo-500",
        "bg-pink-500",
        "bg-teal-500",
    ];

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6">Community Champions</h1>
            <p className="text-lg mb-8">
                Thank you to the senior leaders in Perth's developer and start-up ecosystem who have lent their support and given back to help grow Western Australia's generative AI community. And to the many others we've run out of space to list here—your contributions matter just as much!
            </p>

            <div className="grid grid-cols-5 gap-0">
                {champions.map((champion, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <div 
                            className={`w-full aspect-square ${colors[index % colors.length]} flex items-center justify-center text-white text-4xl font-bold`}
                        >
                            {champion.avatar}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


