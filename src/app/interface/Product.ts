import { Care } from "./Care";
import { ColorDetail } from "./ColorDetail";
import { Reviews } from "./Reviews";

export interface Product {
    Image:               string;
    Image1:              string;
    Content:             string;
    Keywords:            string;
    Name:                string;
    Category:            string;
    Colors:              string;
    Price:               string;
    Promo_apply:         string;
    Reviews:             Reviews;
    Description_title:   string;
    Description_content: string;
    Details:             string;
    Care:                Care;
    Color_detail:        ColorDetail[];
}