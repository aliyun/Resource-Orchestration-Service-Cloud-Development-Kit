import { Documented, PrimitiveType } from './base-types';
import { Property, TagProperty } from './property';
export interface ResourceType extends Documented {
    /**
     * The English description of the resource type, if any.
     */
    Description?: string;
    /**
     * Mapping of CDK's property names to ROS's property names.
     */
    PropsToRosName?: {
        [name: string]: string;
    };
    /**
     * The attributes exposed by the resource type, if any.
     */
    Attributes?: {
        [name: string]: Attribute;
    };
    /**
     * The properties accepted by the resource type, if any.
     */
    Properties?: {
        [name: string]: Property;
    };
    /**
     * The ``Transform`` required by the resource type, if any.
     */
    RequiredTransform?: string;
    /**
     * What kind of value the 'Ref' operator refers to, if any.
     */
    RefKind?: string;
}
export interface TaggableResource extends ResourceType {
    Properties: {
        FileSystemTags: TagProperty;
        HostedZoneTags: TagProperty;
        Tags: TagProperty;
        UserPoolTags: TagProperty;
        [name: string]: Property;
    };
}
export declare type Attribute = Description | PrimitiveAttribute | ListAttribute | MapAttribute;
export interface Description {
    Description: string;
}
export interface PrimitiveAttribute {
    PrimitiveType: PrimitiveType;
}
export declare type ListAttribute = PrimitiveListAttribute | ComplexListAttribute;
export interface PrimitiveListAttribute {
    Type: 'List';
    PrimitiveItemType: PrimitiveType;
}
export interface ComplexListAttribute {
    Type: 'List';
    ItemType: string;
}
export declare type MapAttribute = PrimitiveMapAttribute;
export interface PrimitiveMapAttribute {
    Type: 'Map';
    PrimitiveItemType: PrimitiveType;
}
/**
 * Determine if the resource supports tags
 *
 * This function combined with isTagProperty determines if the `cdk.TagManager`
 * and `cdk.TaggableResource` can process these tags. If not, standard code
 * generation of properties will be used.
 */
export declare function isTaggableResource(spec: ResourceType): spec is TaggableResource;
export declare function isPrimitiveAttribute(spec: Attribute): spec is PrimitiveAttribute;
export declare function isListAttribute(spec: Attribute): spec is ListAttribute;
export declare function isMapAttribute(spec: Attribute): spec is MapAttribute;
export declare function isPrimitiveListAttribute(spec: Attribute): spec is PrimitiveListAttribute;
export declare function isComplexListAttribute(spec: Attribute): spec is ComplexListAttribute;
export declare function isPrimitiveMapAttribute(spec: Attribute): spec is PrimitiveMapAttribute;
/**
 * Type declaration for special values of the "Ref" attribute represents.
 *
 * The attribute can take on more values than these, but these are treated specially.
 */
export declare enum SpecialRefKind {
    /**
     * No '.ref' member is generated for this type, because it doesn't have a meaningful value.
     */
    None = "None",
    /**
     * The generated class will inherit from the built-in 'Arn' type.
     */
    Arn = "Arn"
}
