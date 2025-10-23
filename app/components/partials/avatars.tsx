import { AvatarCircles } from "@/components/ui/avatar-circles"

const avatars = [
    {
        imageUrl: "https://avatars.githubusercontent.com/u/153508097?s=96&v=4",
        profileUrl: "https://github.com/WebmasterSensei",
    },
    {
        imageUrl: "https://avatars.githubusercontent.com/u/106059541?v=4",
        profileUrl: "https://github.com/San103",
    },
    {
        imageUrl: "https://avatars.githubusercontent.com/u/134903345?v=4",
        profileUrl: "https://github.com/hartzy0204",
    },
    {
        imageUrl: "https://avatars.githubusercontent.com/u/181827263?v=4",
        profileUrl: "https://github.com/gamaleCoding",
    },
    {
        imageUrl: "https://avatars.githubusercontent.com/u/148430394?v=4",
        profileUrl: "https://github.com/mariadevhub",
    },
]


export function AvatarCircle() {
    return <AvatarCircles numPeople={avatars.length} avatarUrls={avatars} />
}
