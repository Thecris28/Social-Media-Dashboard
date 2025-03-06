
export type User = {
    username: string,
    followers: number,
    type: string,
    today: number,
    social: string,
}

export type Metric = {
    metric: string,
    value: number | string,
    percentage: number,
    social: string

}