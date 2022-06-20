import { BasicShape } from "./BasicShape";
import { CircleShape } from "./Shapes/CircleShape";
import { EllipseShape } from "./Shapes/EllipseShape";
import { FiveSidesShape } from "./Shapes/FiveSidesShape";
import { RectangleShape } from "./Shapes/RectangleShape";
import { SixSidesShape } from "./Shapes/SixSidesShape";
import { TriangleShape } from "./Shapes/TriangleShape";

export type ShapeType = 
  'basic' 
  | 'rectangle' 
  | 'circle' 
  | 'ellipse' 
  | 'triangle' 
  | '5s shape' 
  | '6s shape'
;

export type Shapes = 
  BasicShape 
  | RectangleShape 
  | CircleShape 
  | EllipseShape 
  | FiveSidesShape 
  | SixSidesShape 
  | TriangleShape;