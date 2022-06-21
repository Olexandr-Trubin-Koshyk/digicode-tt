import { CircleShape } from "./models/Shapes/CircleShape";
import { EllipseShape } from "./models/Shapes/EllipseShape";
import { FiveSidesShape } from "./models/Shapes/FiveSidesShape";
import { RectangleShape } from "./models/Shapes/RectangleShape";
import { SixSidesShape } from "./models/Shapes/SixSidesShape";
import { TriangleShape } from "./models/Shapes/TriangleShape";
import { Application, IHitArea, Rectangle, Ticker } from "pixi.js";

export type OperationType = 'increment' | 'decrement';

export type ShapeType = 
  'basic' 
  | 'rectangle' 
  | 'circle' 
  | 'ellipse' 
  | 'triangle' 
  | '5s shape' 
  | '6s shape'
;

export type Shape = 
  RectangleShape 
  | CircleShape 
  | EllipseShape 
  | FiveSidesShape 
  | SixSidesShape 
  | TriangleShape;
