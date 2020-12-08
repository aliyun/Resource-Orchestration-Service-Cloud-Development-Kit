export interface Documented {
    /** A link to the ROS User Guide that provides informations about the entity. */
    Documentation?: string;
}
export declare enum PrimitiveType {
    String = "String",
    Long = "Long",
    Integer = "Integer",
    Number = "Number",
    Double = "Double",
    Boolean = "Boolean",
    Timestamp = "Timestamp",
    Json = "Json",
    Any = "Any"
}
export declare function isPrimitiveType(str: string): str is PrimitiveType;
