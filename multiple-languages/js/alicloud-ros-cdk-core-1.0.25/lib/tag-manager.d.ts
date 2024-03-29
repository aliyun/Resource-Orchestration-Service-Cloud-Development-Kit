export declare enum TagType {
    STANDARD = "StandardTag",
    AUTOSCALING_GROUP = "AutoScalingGroupTag",
    MAP = "StringToStringMap",
    KEY_VALUE = "KeyValue",
    NOT_TAGGABLE = "NotTaggable"
}
/**
 * Interface to implement tags.
 */
export interface ITaggable {
    /**
     * TagManager to set, remove and format tags
     */
    readonly tags: TagManager;
}
/**
 * Options to configure TagManager behavior
 */
export interface TagManagerOptions {
    /**
     * The name of the property in ROS for these tags
     *
     * Normally this is `tags`, but Cognito UserPool uses UserPoolTags
     *
     * @default "tags"
     */
    readonly tagPropertyName?: string;
}
/**
 * TagManager facilitates a common implementation of tagging for Constructs.
 */
export declare class TagManager {
    /**
     * Check whether the given construct is Taggable
     */
    static isTaggable(construct: any): construct is ITaggable;
    /**
     * The property name for tag values
     *
     * Normally this is `tags` but some resources choose a different name. Cognito
     * UserPool uses UserPoolTags
     */
    readonly tagPropertyName: string;
    private readonly tags;
    private readonly priorities;
    private readonly tagFormatter;
    private readonly resourceTypeName;
    private readonly initialTagPriority;
    constructor(tagType: TagType, resourceTypeName: string, tagStructure?: any, options?: TagManagerOptions);
    /**
     * Adds the specified tag to the array of tags
     *
     */
    setTag(key: string, value: string, priority?: number, applyToLaunchedInstances?: boolean): void;
    /**
     * Removes the specified tag from the array if it exists
     *
     * @param key The tag to remove
     * @param priority The priority of the remove operation
     */
    removeTag(key: string, priority: number): void;
    /**
     * Renders tags into the proper format based on TagType
     */
    renderTags(): any;
    /**
     * Render the tags in a readable format
     */
    tagValues(): Record<string, string>;
    /**
     * Determine if the aspect applies here
     *
     * Looks at the include and exclude resourceTypeName arrays to determine if
     * the aspect applies here
     */
    applyTagAspectHere(include?: string[], exclude?: string[]): boolean;
    /**
     * Returns true if there are any tags defined
     */
    hasTags(): boolean;
    private _setTag;
    private get sortedTags();
}
