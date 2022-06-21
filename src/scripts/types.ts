import { CircleShape } from "./models/Shapes/CircleShape";
import { EllipseShape } from "./models/Shapes/EllipseShape";
import { FiveSidesShape } from "./models/Shapes/FiveSidesShape";
import { RectangleShape } from "./models/Shapes/RectangleShape";
import { SixSidesShape } from "./models/Shapes/SixSidesShape";
import { TriangleShape } from "./models/Shapes/TriangleShape";

export type OperationType = 'increment' | 'decrement';

export type Shape = 
  RectangleShape 
  | CircleShape 
  | EllipseShape 
  | FiveSidesShape 
  | SixSidesShape 
  | TriangleShape;
