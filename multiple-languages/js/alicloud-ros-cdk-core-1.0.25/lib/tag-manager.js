"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagManager = exports.TagType = void 0;
var TagType;
(function (TagType) {
    TagType["STANDARD"] = "StandardTag";
    TagType["AUTOSCALING_GROUP"] = "AutoScalingGroupTag";
    TagType["MAP"] = "StringToStringMap";
    TagType["KEY_VALUE"] = "KeyValue";
    TagType["NOT_TAGGABLE"] = "NotTaggable";
})(TagType = exports.TagType || (exports.TagType = {}));
/**
 * Standard tags are a list of { key, value } objects
 */
class StandardFormatter {
    parseTags(rosPropertyTags, priority) {
        if (!Array.isArray(rosPropertyTags)) {
            throw new Error(`Invalid tag input expected array of {key, value} have ${JSON.stringify(rosPropertyTags)}`);
        }
        const tags = [];
        for (const tag of rosPropertyTags) {
            if (tag.key === undefined || tag.value === undefined) {
                throw new Error(`Invalid tag input expected {key, value} have ${JSON.stringify(tag)}`);
            }
            // using interp to ensure Token is now string
            tags.push({
                key: `${tag.key}`,
                value: `${tag.value}`,
                priority,
            });
        }
        return tags;
    }
    formatTags(tags) {
        const rosTags = [];
        for (const tag of tags) {
            rosTags.push({
                key: tag.key,
                value: tag.value,
            });
        }
        return rosTags.length === 0 ? undefined : rosTags;
    }
}
/**
 * ASG tags are a list of { key, value, propagateAtLaunch } objects
 */
class AsgFormatter {
    parseTags(rosPropertyTags, priority) {
        const tags = [];
        if (!Array.isArray(rosPropertyTags)) {
            throw new Error(`Invalid tag input expected array of {key, value, propagateAtLaunch} have ${JSON.stringify(rosPropertyTags)}`);
        }
        for (const tag of rosPropertyTags) {
            if (tag.key === undefined ||
                tag.value === undefined ||
                tag.propagateAtLaunch === undefined) {
                throw new Error(`Invalid tag input expected {key, value, propagateAtLaunch} have ${JSON.stringify(tag)}`);
            }
            // using interp to ensure Token is now string
            tags.push({
                key: `${tag.key}`,
                value: `${tag.value}`,
                priority,
                applyToLaunchedInstances: !!tag.propagateAtLaunch,
            });
        }
        return tags;
    }
    formatTags(tags) {
        const rosTags = [];
        for (const tag of tags) {
            rosTags.push({
                key: tag.key,
                value: tag.value,
                propagateAtLaunch: tag.applyToLaunchedInstances !== false,
            });
        }
        return rosTags.length === 0 ? undefined : rosTags;
    }
}
/**
 * Some ROS constructs use a { key: value } map for tags
 */
class MapFormatter {
    parseTags(rosPropertyTags, priority) {
        const tags = [];
        if (Array.isArray(rosPropertyTags) || typeof rosPropertyTags !== "object") {
            throw new Error(`Invalid tag input expected map of {key: value} have ${JSON.stringify(rosPropertyTags)}`);
        }
        for (const [key, value] of Object.entries(rosPropertyTags)) {
            tags.push({
                key,
                value: `${value}`,
                priority,
            });
        }
        return tags;
    }
    formatTags(tags) {
        const rosTags = {};
        for (const tag of tags) {
            rosTags[`${tag.key}`] = `${tag.value}`;
        }
        return Object.keys(rosTags).length === 0 ? undefined : rosTags;
    }
}
/**
 * StackTags are of the format { Key: key, Value: value }
 */
class KeyValueFormatter {
    parseTags(keyValueTags, priority) {
        const tags = [];
        for (const key in keyValueTags) {
            if (keyValueTags.hasOwnProperty(key)) {
                const value = keyValueTags[key];
                tags.push({
                    key,
                    value,
                    priority,
                });
            }
        }
        return tags;
    }
    formatTags(unformattedTags) {
        const tags = [];
        unformattedTags.forEach((tag) => {
            tags.push({
                Key: tag.key,
                Value: tag.value,
            });
        });
        return tags;
    }
}
class NoFormat {
    parseTags(_rosPropertyTags) {
        return [];
    }
    formatTags(_tags) {
        return undefined;
    }
}
const TAG_FORMATTERS = {
    [TagType.AUTOSCALING_GROUP]: new AsgFormatter(),
    [TagType.STANDARD]: new StandardFormatter(),
    [TagType.MAP]: new MapFormatter(),
    [TagType.KEY_VALUE]: new KeyValueFormatter(),
    [TagType.NOT_TAGGABLE]: new NoFormat(),
};
/**
 * TagManager facilitates a common implementation of tagging for Constructs.
 */
class TagManager {
    constructor(tagType, resourceTypeName, tagStructure, options = {}) {
        this.tags = new Map();
        this.priorities = new Map();
        this.initialTagPriority = 50;
        this.resourceTypeName = resourceTypeName;
        this.tagFormatter = TAG_FORMATTERS[tagType];
        if (tagStructure !== undefined) {
            this._setTag(...this.tagFormatter.parseTags(tagStructure, this.initialTagPriority));
        }
        this.tagPropertyName = options.tagPropertyName || "tags";
    }
    /**
     * Check whether the given construct is Taggable
     */
    static isTaggable(construct) {
        return construct.tags !== undefined;
    }
    /**
     * Adds the specified tag to the array of tags
     *
     */
    setTag(key, value, priority = 0, applyToLaunchedInstances = true) {
        // This method mostly exists because we don't want to expose the 'Tag' type used (it will be confusing
        // to users).
        this._setTag({ key, value, priority, applyToLaunchedInstances });
    }
    /**
     * Removes the specified tag from the array if it exists
     *
     * @param key The tag to remove
     * @param priority The priority of the remove operation
     */
    removeTag(key, priority) {
        if (priority >= (this.priorities.get(key) || 0)) {
            this.tags.delete(key);
            this.priorities.set(key, priority);
        }
    }
    /**
     * Renders tags into the proper format based on TagType
     */
    renderTags() {
        return this.tagFormatter.formatTags(this.sortedTags);
    }
    /**
     * Render the tags in a readable format
     */
    tagValues() {
        const ret = {};
        for (const tag of this.sortedTags) {
            ret[tag.key] = tag.value;
        }
        return ret;
    }
    /**
     * Determine if the aspect applies here
     *
     * Looks at the include and exclude resourceTypeName arrays to determine if
     * the aspect applies here
     */
    applyTagAspectHere(include, exclude) {
        if (exclude &&
            exclude.length > 0 &&
            exclude.indexOf(this.resourceTypeName) !== -1) {
            return false;
        }
        if (include &&
            include.length > 0 &&
            include.indexOf(this.resourceTypeName) === -1) {
            return false;
        }
        return true;
    }
    /**
     * Returns true if there are any tags defined
     */
    hasTags() {
        return this.tags.size > 0;
    }
    _setTag(...tags) {
        for (const tag of tags) {
            if (tag.priority >= (this.priorities.get(tag.key) || 0)) {
                this.tags.set(tag.key, tag);
                this.priorities.set(tag.key, tag.priority);
            }
        }
    }
    get sortedTags() {
        return Array.from(this.tags.values()).sort((a, b) => a.key.localeCompare(b.key));
    }
}
exports.TagManager = TagManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLW1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWctbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxJQUFZLE9BTVg7QUFORCxXQUFZLE9BQU87SUFDakIsbUNBQXdCLENBQUE7SUFDeEIsb0RBQXlDLENBQUE7SUFDekMsb0NBQXlCLENBQUE7SUFDekIsaUNBQXNCLENBQUE7SUFDdEIsdUNBQTRCLENBQUE7QUFDOUIsQ0FBQyxFQU5XLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQU1sQjtBQXdDRDs7R0FFRztBQUNILE1BQU0saUJBQWlCO0lBQ2QsU0FBUyxDQUFDLGVBQW9CLEVBQUUsUUFBZ0I7UUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FDYix5REFBeUQsSUFBSSxDQUFDLFNBQVMsQ0FDckUsZUFBZSxDQUNoQixFQUFFLENBQ0osQ0FBQztTQUNIO1FBRUQsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssTUFBTSxHQUFHLElBQUksZUFBZSxFQUFFO1lBQ2pDLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7Z0JBQ3BELE1BQU0sSUFBSSxLQUFLLENBQ2IsZ0RBQWdELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FDdEUsQ0FBQzthQUNIO1lBRUQsNkNBQTZDO1lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ1IsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDakIsS0FBSyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRTtnQkFDckIsUUFBUTthQUNULENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sVUFBVSxDQUFDLElBQVc7UUFDM0IsTUFBTSxPQUFPLEdBQWEsRUFBRSxDQUFDO1FBQzdCLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ1gsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHO2dCQUNaLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSzthQUNqQixDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ3BELENBQUM7Q0FDRjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxZQUFZO0lBQ1QsU0FBUyxDQUFDLGVBQW9CLEVBQUUsUUFBZ0I7UUFDckQsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ25DLE1BQU0sSUFBSSxLQUFLLENBQ2IsNEVBQTRFLElBQUksQ0FBQyxTQUFTLENBQ3hGLGVBQWUsQ0FDaEIsRUFBRSxDQUNKLENBQUM7U0FDSDtRQUVELEtBQUssTUFBTSxHQUFHLElBQUksZUFBZSxFQUFFO1lBQ2pDLElBQ0UsR0FBRyxDQUFDLEdBQUcsS0FBSyxTQUFTO2dCQUNyQixHQUFHLENBQUMsS0FBSyxLQUFLLFNBQVM7Z0JBQ3ZCLEdBQUcsQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLEVBQ25DO2dCQUNBLE1BQU0sSUFBSSxLQUFLLENBQ2IsbUVBQW1FLElBQUksQ0FBQyxTQUFTLENBQy9FLEdBQUcsQ0FDSixFQUFFLENBQ0osQ0FBQzthQUNIO1lBQ0QsNkNBQTZDO1lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ1IsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDakIsS0FBSyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRTtnQkFDckIsUUFBUTtnQkFDUix3QkFBd0IsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGlCQUFpQjthQUNsRCxDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLFVBQVUsQ0FBQyxJQUFXO1FBQzNCLE1BQU0sT0FBTyxHQUFnQixFQUFFLENBQUM7UUFDaEMsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDWCxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUc7Z0JBQ1osS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO2dCQUNoQixpQkFBaUIsRUFBRSxHQUFHLENBQUMsd0JBQXdCLEtBQUssS0FBSzthQUMxRCxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ3BELENBQUM7Q0FDRjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxZQUFZO0lBQ1QsU0FBUyxDQUFDLGVBQW9CLEVBQUUsUUFBZ0I7UUFDckQsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxPQUFPLGVBQWUsS0FBSyxRQUFRLEVBQUU7WUFDekUsTUFBTSxJQUFJLEtBQUssQ0FDYix1REFBdUQsSUFBSSxDQUFDLFNBQVMsQ0FDbkUsZUFBZSxDQUNoQixFQUFFLENBQ0osQ0FBQztTQUNIO1FBRUQsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDUixHQUFHO2dCQUNILEtBQUssRUFBRSxHQUFHLEtBQUssRUFBRTtnQkFDakIsUUFBUTthQUNULENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sVUFBVSxDQUFDLElBQVc7UUFDM0IsTUFBTSxPQUFPLEdBQThCLEVBQUUsQ0FBQztRQUM5QyxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtZQUN0QixPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4QztRQUNELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUNqRSxDQUFDO0NBQ0Y7QUFFRDs7R0FFRztBQUNILE1BQU0saUJBQWlCO0lBQ2QsU0FBUyxDQUFDLFlBQWlCLEVBQUUsUUFBZ0I7UUFDbEQsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFO1lBQzlCLElBQUksWUFBWSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDcEMsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUNSLEdBQUc7b0JBQ0gsS0FBSztvQkFDTCxRQUFRO2lCQUNULENBQUMsQ0FBQzthQUNKO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDTSxVQUFVLENBQUMsZUFBc0I7UUFDdEMsTUFBTSxJQUFJLEdBQWUsRUFBRSxDQUFDO1FBQzVCLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNSLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRztnQkFDWixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7YUFDakIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRjtBQUVELE1BQU0sUUFBUTtJQUNMLFNBQVMsQ0FBQyxnQkFBcUI7UUFDcEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ00sVUFBVSxDQUFDLEtBQVk7UUFDNUIsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztDQUNGO0FBRUQsTUFBTSxjQUFjLEdBQXFDO0lBQ3ZELENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxZQUFZLEVBQUU7SUFDL0MsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxpQkFBaUIsRUFBRTtJQUMzQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLFlBQVksRUFBRTtJQUNqQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLGlCQUFpQixFQUFFO0lBQzVDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksUUFBUSxFQUFFO0NBQ3ZDLENBQUM7QUEwQkY7O0dBRUc7QUFDSCxNQUFhLFVBQVU7SUFzQnJCLFlBQ0UsT0FBZ0IsRUFDaEIsZ0JBQXdCLEVBQ3hCLFlBQWtCLEVBQ2xCLFVBQTZCLEVBQUU7UUFWaEIsU0FBSSxHQUFHLElBQUksR0FBRyxFQUFlLENBQUM7UUFDOUIsZUFBVSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBR3ZDLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQVF2QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsSUFBSSxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQ1YsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQ3RFLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLGVBQWUsSUFBSSxNQUFNLENBQUM7SUFDM0QsQ0FBQztJQW5DRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBYztRQUNyQyxPQUFRLFNBQWlCLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztJQUMvQyxDQUFDO0lBZ0NEOzs7T0FHRztJQUNJLE1BQU0sQ0FDWCxHQUFXLEVBQ1gsS0FBYSxFQUNiLFFBQVEsR0FBRyxDQUFDLEVBQ1osd0JBQXdCLEdBQUcsSUFBSTtRQUUvQixzR0FBc0c7UUFDdEcsYUFBYTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksU0FBUyxDQUFDLEdBQVcsRUFBRSxRQUFnQjtRQUM1QyxJQUFJLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLFVBQVU7UUFDZixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxTQUFTO1FBQ2QsTUFBTSxHQUFHLEdBQTJCLEVBQUUsQ0FBQztRQUN2QyxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxrQkFBa0IsQ0FBQyxPQUFrQixFQUFFLE9BQWtCO1FBQzlELElBQ0UsT0FBTztZQUNQLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNsQixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUM3QztZQUNBLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUNFLE9BQU87WUFDUCxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDbEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDN0M7WUFDQSxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxPQUFPO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVPLE9BQU8sQ0FBQyxHQUFHLElBQVc7UUFDNUIsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDdEIsSUFBSSxHQUFHLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM1QztTQUNGO0lBQ0gsQ0FBQztJQUVELElBQVksVUFBVTtRQUNwQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Q0FDRjtBQWhJRCxnQ0FnSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3NUYWcgfSBmcm9tIFwiLi9yb3MtdGFnXCI7XG5cbmV4cG9ydCBlbnVtIFRhZ1R5cGUge1xuICBTVEFOREFSRCA9IFwiU3RhbmRhcmRUYWdcIixcbiAgQVVUT1NDQUxJTkdfR1JPVVAgPSBcIkF1dG9TY2FsaW5nR3JvdXBUYWdcIixcbiAgTUFQID0gXCJTdHJpbmdUb1N0cmluZ01hcFwiLFxuICBLRVlfVkFMVUUgPSBcIktleVZhbHVlXCIsXG4gIE5PVF9UQUdHQUJMRSA9IFwiTm90VGFnZ2FibGVcIixcbn1cblxuaW50ZXJmYWNlIFRhZyB7XG4gIGtleTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBwcmlvcml0eTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBhcHBseVRvTGF1bmNoZWRJbnN0YW5jZXM/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgUm9zQXNnVGFnIHtcbiAga2V5OiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHByb3BhZ2F0ZUF0TGF1bmNoOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgU3RhY2tUYWcge1xuICBLZXk6IHN0cmluZztcbiAgVmFsdWU6IHN0cmluZztcbn1cbi8qKlxuICogSW50ZXJmYWNlIGZvciBjb252ZXJ0ZXIgYmV0d2VlbiBST1MgYW5kIGludGVybmFsIHRhZyByZXByZXNlbnRhdGlvbnNcbiAqL1xuaW50ZXJmYWNlIElUYWdGb3JtYXR0ZXIge1xuICAvKipcbiAgICogRm9ybWF0IHRoZSBnaXZlbiB0YWdzIGFzIHRhZ3NcbiAgICovXG4gIGZvcm1hdFRhZ3ModGFnczogVGFnW10pOiBhbnk7XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSB0YWcgcmVwcmVzZW50YXRpb24gaW50byBpbnRlcm5hbCByZXByZXNlbnRhdGlvblxuICAgKlxuICAgKiBVc2UgdGhlIGdpdmVuIHByaW9yaXR5LlxuICAgKi9cbiAgcGFyc2VUYWdzKHJvc1Byb3BlcnR5VGFnczogYW55LCBwcmlvcml0eTogbnVtYmVyKTogVGFnW107XG59XG5cbi8qKlxuICogU3RhbmRhcmQgdGFncyBhcmUgYSBsaXN0IG9mIHsga2V5LCB2YWx1ZSB9IG9iamVjdHNcbiAqL1xuY2xhc3MgU3RhbmRhcmRGb3JtYXR0ZXIgaW1wbGVtZW50cyBJVGFnRm9ybWF0dGVyIHtcbiAgcHVibGljIHBhcnNlVGFncyhyb3NQcm9wZXJ0eVRhZ3M6IGFueSwgcHJpb3JpdHk6IG51bWJlcik6IFRhZ1tdIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9zUHJvcGVydHlUYWdzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW52YWxpZCB0YWcgaW5wdXQgZXhwZWN0ZWQgYXJyYXkgb2Yge2tleSwgdmFsdWV9IGhhdmUgJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICByb3NQcm9wZXJ0eVRhZ3NcbiAgICAgICAgKX1gXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHRhZ3M6IFRhZ1tdID0gW107XG4gICAgZm9yIChjb25zdCB0YWcgb2Ygcm9zUHJvcGVydHlUYWdzKSB7XG4gICAgICBpZiAodGFnLmtleSA9PT0gdW5kZWZpbmVkIHx8IHRhZy52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCB0YWcgaW5wdXQgZXhwZWN0ZWQge2tleSwgdmFsdWV9IGhhdmUgJHtKU09OLnN0cmluZ2lmeSh0YWcpfWBcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gdXNpbmcgaW50ZXJwIHRvIGVuc3VyZSBUb2tlbiBpcyBub3cgc3RyaW5nXG4gICAgICB0YWdzLnB1c2goe1xuICAgICAgICBrZXk6IGAke3RhZy5rZXl9YCxcbiAgICAgICAgdmFsdWU6IGAke3RhZy52YWx1ZX1gLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFncztcbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXRUYWdzKHRhZ3M6IFRhZ1tdKTogYW55IHtcbiAgICBjb25zdCByb3NUYWdzOiBSb3NUYWdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgdGFnIG9mIHRhZ3MpIHtcbiAgICAgIHJvc1RhZ3MucHVzaCh7XG4gICAgICAgIGtleTogdGFnLmtleSxcbiAgICAgICAgdmFsdWU6IHRhZy52YWx1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcm9zVGFncy5sZW5ndGggPT09IDAgPyB1bmRlZmluZWQgOiByb3NUYWdzO1xuICB9XG59XG5cbi8qKlxuICogQVNHIHRhZ3MgYXJlIGEgbGlzdCBvZiB7IGtleSwgdmFsdWUsIHByb3BhZ2F0ZUF0TGF1bmNoIH0gb2JqZWN0c1xuICovXG5jbGFzcyBBc2dGb3JtYXR0ZXIgaW1wbGVtZW50cyBJVGFnRm9ybWF0dGVyIHtcbiAgcHVibGljIHBhcnNlVGFncyhyb3NQcm9wZXJ0eVRhZ3M6IGFueSwgcHJpb3JpdHk6IG51bWJlcik6IFRhZ1tdIHtcbiAgICBjb25zdCB0YWdzOiBUYWdbXSA9IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShyb3NQcm9wZXJ0eVRhZ3MpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbnZhbGlkIHRhZyBpbnB1dCBleHBlY3RlZCBhcnJheSBvZiB7a2V5LCB2YWx1ZSwgcHJvcGFnYXRlQXRMYXVuY2h9IGhhdmUgJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICByb3NQcm9wZXJ0eVRhZ3NcbiAgICAgICAgKX1gXG4gICAgICApO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgdGFnIG9mIHJvc1Byb3BlcnR5VGFncykge1xuICAgICAgaWYgKFxuICAgICAgICB0YWcua2V5ID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgdGFnLnZhbHVlID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgdGFnLnByb3BhZ2F0ZUF0TGF1bmNoID09PSB1bmRlZmluZWRcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgdGFnIGlucHV0IGV4cGVjdGVkIHtrZXksIHZhbHVlLCBwcm9wYWdhdGVBdExhdW5jaH0gaGF2ZSAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgdGFnXG4gICAgICAgICAgKX1gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICAvLyB1c2luZyBpbnRlcnAgdG8gZW5zdXJlIFRva2VuIGlzIG5vdyBzdHJpbmdcbiAgICAgIHRhZ3MucHVzaCh7XG4gICAgICAgIGtleTogYCR7dGFnLmtleX1gLFxuICAgICAgICB2YWx1ZTogYCR7dGFnLnZhbHVlfWAsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBhcHBseVRvTGF1bmNoZWRJbnN0YW5jZXM6ICEhdGFnLnByb3BhZ2F0ZUF0TGF1bmNoLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhZ3M7XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0VGFncyh0YWdzOiBUYWdbXSk6IGFueSB7XG4gICAgY29uc3Qgcm9zVGFnczogUm9zQXNnVGFnW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHRhZyBvZiB0YWdzKSB7XG4gICAgICByb3NUYWdzLnB1c2goe1xuICAgICAgICBrZXk6IHRhZy5rZXksXG4gICAgICAgIHZhbHVlOiB0YWcudmFsdWUsXG4gICAgICAgIHByb3BhZ2F0ZUF0TGF1bmNoOiB0YWcuYXBwbHlUb0xhdW5jaGVkSW5zdGFuY2VzICE9PSBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcm9zVGFncy5sZW5ndGggPT09IDAgPyB1bmRlZmluZWQgOiByb3NUYWdzO1xuICB9XG59XG5cbi8qKlxuICogU29tZSBST1MgY29uc3RydWN0cyB1c2UgYSB7IGtleTogdmFsdWUgfSBtYXAgZm9yIHRhZ3NcbiAqL1xuY2xhc3MgTWFwRm9ybWF0dGVyIGltcGxlbWVudHMgSVRhZ0Zvcm1hdHRlciB7XG4gIHB1YmxpYyBwYXJzZVRhZ3Mocm9zUHJvcGVydHlUYWdzOiBhbnksIHByaW9yaXR5OiBudW1iZXIpOiBUYWdbXSB7XG4gICAgY29uc3QgdGFnczogVGFnW10gPSBbXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShyb3NQcm9wZXJ0eVRhZ3MpIHx8IHR5cGVvZiByb3NQcm9wZXJ0eVRhZ3MgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEludmFsaWQgdGFnIGlucHV0IGV4cGVjdGVkIG1hcCBvZiB7a2V5OiB2YWx1ZX0gaGF2ZSAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHJvc1Byb3BlcnR5VGFnc1xuICAgICAgICApfWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocm9zUHJvcGVydHlUYWdzKSkge1xuICAgICAgdGFncy5wdXNoKHtcbiAgICAgICAga2V5LFxuICAgICAgICB2YWx1ZTogYCR7dmFsdWV9YCxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFncztcbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXRUYWdzKHRhZ3M6IFRhZ1tdKTogYW55IHtcbiAgICBjb25zdCByb3NUYWdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgZm9yIChjb25zdCB0YWcgb2YgdGFncykge1xuICAgICAgcm9zVGFnc1tgJHt0YWcua2V5fWBdID0gYCR7dGFnLnZhbHVlfWA7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhyb3NUYWdzKS5sZW5ndGggPT09IDAgPyB1bmRlZmluZWQgOiByb3NUYWdzO1xuICB9XG59XG5cbi8qKlxuICogU3RhY2tUYWdzIGFyZSBvZiB0aGUgZm9ybWF0IHsgS2V5OiBrZXksIFZhbHVlOiB2YWx1ZSB9XG4gKi9cbmNsYXNzIEtleVZhbHVlRm9ybWF0dGVyIGltcGxlbWVudHMgSVRhZ0Zvcm1hdHRlciB7XG4gIHB1YmxpYyBwYXJzZVRhZ3Moa2V5VmFsdWVUYWdzOiBhbnksIHByaW9yaXR5OiBudW1iZXIpOiBUYWdbXSB7XG4gICAgY29uc3QgdGFnczogVGFnW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBrZXlWYWx1ZVRhZ3MpIHtcbiAgICAgIGlmIChrZXlWYWx1ZVRhZ3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGtleVZhbHVlVGFnc1trZXldO1xuICAgICAgICB0YWdzLnB1c2goe1xuICAgICAgICAgIGtleSxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YWdzO1xuICB9XG4gIHB1YmxpYyBmb3JtYXRUYWdzKHVuZm9ybWF0dGVkVGFnczogVGFnW10pOiBhbnkge1xuICAgIGNvbnN0IHRhZ3M6IFN0YWNrVGFnW10gPSBbXTtcbiAgICB1bmZvcm1hdHRlZFRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICB0YWdzLnB1c2goe1xuICAgICAgICBLZXk6IHRhZy5rZXksXG4gICAgICAgIFZhbHVlOiB0YWcudmFsdWUsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFncztcbiAgfVxufVxuXG5jbGFzcyBOb0Zvcm1hdCBpbXBsZW1lbnRzIElUYWdGb3JtYXR0ZXIge1xuICBwdWJsaWMgcGFyc2VUYWdzKF9yb3NQcm9wZXJ0eVRhZ3M6IGFueSk6IFRhZ1tdIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgcHVibGljIGZvcm1hdFRhZ3MoX3RhZ3M6IFRhZ1tdKTogYW55IHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbmNvbnN0IFRBR19GT1JNQVRURVJTOiB7IFtrZXk6IHN0cmluZ106IElUYWdGb3JtYXR0ZXIgfSA9IHtcbiAgW1RhZ1R5cGUuQVVUT1NDQUxJTkdfR1JPVVBdOiBuZXcgQXNnRm9ybWF0dGVyKCksXG4gIFtUYWdUeXBlLlNUQU5EQVJEXTogbmV3IFN0YW5kYXJkRm9ybWF0dGVyKCksXG4gIFtUYWdUeXBlLk1BUF06IG5ldyBNYXBGb3JtYXR0ZXIoKSxcbiAgW1RhZ1R5cGUuS0VZX1ZBTFVFXTogbmV3IEtleVZhbHVlRm9ybWF0dGVyKCksXG4gIFtUYWdUeXBlLk5PVF9UQUdHQUJMRV06IG5ldyBOb0Zvcm1hdCgpLFxufTtcblxuLyoqXG4gKiBJbnRlcmZhY2UgdG8gaW1wbGVtZW50IHRhZ3MuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRhZ2dhYmxlIHtcbiAgLyoqXG4gICAqIFRhZ01hbmFnZXIgdG8gc2V0LCByZW1vdmUgYW5kIGZvcm1hdCB0YWdzXG4gICAqL1xuICByZWFkb25seSB0YWdzOiBUYWdNYW5hZ2VyO1xufVxuXG4vKipcbiAqIE9wdGlvbnMgdG8gY29uZmlndXJlIFRhZ01hbmFnZXIgYmVoYXZpb3JcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUYWdNYW5hZ2VyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgaW4gUk9TIGZvciB0aGVzZSB0YWdzXG4gICAqXG4gICAqIE5vcm1hbGx5IHRoaXMgaXMgYHRhZ3NgLCBidXQgQ29nbml0byBVc2VyUG9vbCB1c2VzIFVzZXJQb29sVGFnc1xuICAgKlxuICAgKiBAZGVmYXVsdCBcInRhZ3NcIlxuICAgKi9cbiAgcmVhZG9ubHkgdGFnUHJvcGVydHlOYW1lPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIFRhZ01hbmFnZXIgZmFjaWxpdGF0ZXMgYSBjb21tb24gaW1wbGVtZW50YXRpb24gb2YgdGFnZ2luZyBmb3IgQ29uc3RydWN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRhZ01hbmFnZXIge1xuICAvKipcbiAgICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gY29uc3RydWN0IGlzIFRhZ2dhYmxlXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGlzVGFnZ2FibGUoY29uc3RydWN0OiBhbnkpOiBjb25zdHJ1Y3QgaXMgSVRhZ2dhYmxlIHtcbiAgICByZXR1cm4gKGNvbnN0cnVjdCBhcyBhbnkpLnRhZ3MgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcHJvcGVydHkgbmFtZSBmb3IgdGFnIHZhbHVlc1xuICAgKlxuICAgKiBOb3JtYWxseSB0aGlzIGlzIGB0YWdzYCBidXQgc29tZSByZXNvdXJjZXMgY2hvb3NlIGEgZGlmZmVyZW50IG5hbWUuIENvZ25pdG9cbiAgICogVXNlclBvb2wgdXNlcyBVc2VyUG9vbFRhZ3NcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSB0YWdQcm9wZXJ0eU5hbWU6IHN0cmluZztcblxuICBwcml2YXRlIHJlYWRvbmx5IHRhZ3MgPSBuZXcgTWFwPHN0cmluZywgVGFnPigpO1xuICBwcml2YXRlIHJlYWRvbmx5IHByaW9yaXRpZXMgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICBwcml2YXRlIHJlYWRvbmx5IHRhZ0Zvcm1hdHRlcjogSVRhZ0Zvcm1hdHRlcjtcbiAgcHJpdmF0ZSByZWFkb25seSByZXNvdXJjZVR5cGVOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW5pdGlhbFRhZ1ByaW9yaXR5ID0gNTA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdGFnVHlwZTogVGFnVHlwZSxcbiAgICByZXNvdXJjZVR5cGVOYW1lOiBzdHJpbmcsXG4gICAgdGFnU3RydWN0dXJlPzogYW55LFxuICAgIG9wdGlvbnM6IFRhZ01hbmFnZXJPcHRpb25zID0ge31cbiAgKSB7XG4gICAgdGhpcy5yZXNvdXJjZVR5cGVOYW1lID0gcmVzb3VyY2VUeXBlTmFtZTtcbiAgICB0aGlzLnRhZ0Zvcm1hdHRlciA9IFRBR19GT1JNQVRURVJTW3RhZ1R5cGVdO1xuICAgIGlmICh0YWdTdHJ1Y3R1cmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fc2V0VGFnKFxuICAgICAgICAuLi50aGlzLnRhZ0Zvcm1hdHRlci5wYXJzZVRhZ3ModGFnU3RydWN0dXJlLCB0aGlzLmluaXRpYWxUYWdQcmlvcml0eSlcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMudGFnUHJvcGVydHlOYW1lID0gb3B0aW9ucy50YWdQcm9wZXJ0eU5hbWUgfHwgXCJ0YWdzXCI7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgc3BlY2lmaWVkIHRhZyB0byB0aGUgYXJyYXkgb2YgdGFnc1xuICAgKlxuICAgKi9cbiAgcHVibGljIHNldFRhZyhcbiAgICBrZXk6IHN0cmluZyxcbiAgICB2YWx1ZTogc3RyaW5nLFxuICAgIHByaW9yaXR5ID0gMCxcbiAgICBhcHBseVRvTGF1bmNoZWRJbnN0YW5jZXMgPSB0cnVlXG4gICk6IHZvaWQge1xuICAgIC8vIFRoaXMgbWV0aG9kIG1vc3RseSBleGlzdHMgYmVjYXVzZSB3ZSBkb24ndCB3YW50IHRvIGV4cG9zZSB0aGUgJ1RhZycgdHlwZSB1c2VkIChpdCB3aWxsIGJlIGNvbmZ1c2luZ1xuICAgIC8vIHRvIHVzZXJzKS5cbiAgICB0aGlzLl9zZXRUYWcoeyBrZXksIHZhbHVlLCBwcmlvcml0eSwgYXBwbHlUb0xhdW5jaGVkSW5zdGFuY2VzIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIHNwZWNpZmllZCB0YWcgZnJvbSB0aGUgYXJyYXkgaWYgaXQgZXhpc3RzXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgVGhlIHRhZyB0byByZW1vdmVcbiAgICogQHBhcmFtIHByaW9yaXR5IFRoZSBwcmlvcml0eSBvZiB0aGUgcmVtb3ZlIG9wZXJhdGlvblxuICAgKi9cbiAgcHVibGljIHJlbW92ZVRhZyhrZXk6IHN0cmluZywgcHJpb3JpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChwcmlvcml0eSA+PSAodGhpcy5wcmlvcml0aWVzLmdldChrZXkpIHx8IDApKSB7XG4gICAgICB0aGlzLnRhZ3MuZGVsZXRlKGtleSk7XG4gICAgICB0aGlzLnByaW9yaXRpZXMuc2V0KGtleSwgcHJpb3JpdHkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRhZ3MgaW50byB0aGUgcHJvcGVyIGZvcm1hdCBiYXNlZCBvbiBUYWdUeXBlXG4gICAqL1xuICBwdWJsaWMgcmVuZGVyVGFncygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnRhZ0Zvcm1hdHRlci5mb3JtYXRUYWdzKHRoaXMuc29ydGVkVGFncyk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIHRoZSB0YWdzIGluIGEgcmVhZGFibGUgZm9ybWF0XG4gICAqL1xuICBwdWJsaWMgdGFnVmFsdWVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIGNvbnN0IHJldDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICAgIGZvciAoY29uc3QgdGFnIG9mIHRoaXMuc29ydGVkVGFncykge1xuICAgICAgcmV0W3RhZy5rZXldID0gdGFnLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGUgYXNwZWN0IGFwcGxpZXMgaGVyZVxuICAgKlxuICAgKiBMb29rcyBhdCB0aGUgaW5jbHVkZSBhbmQgZXhjbHVkZSByZXNvdXJjZVR5cGVOYW1lIGFycmF5cyB0byBkZXRlcm1pbmUgaWZcbiAgICogdGhlIGFzcGVjdCBhcHBsaWVzIGhlcmVcbiAgICovXG4gIHB1YmxpYyBhcHBseVRhZ0FzcGVjdEhlcmUoaW5jbHVkZT86IHN0cmluZ1tdLCBleGNsdWRlPzogc3RyaW5nW10pIHtcbiAgICBpZiAoXG4gICAgICBleGNsdWRlICYmXG4gICAgICBleGNsdWRlLmxlbmd0aCA+IDAgJiZcbiAgICAgIGV4Y2x1ZGUuaW5kZXhPZih0aGlzLnJlc291cmNlVHlwZU5hbWUpICE9PSAtMVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBpbmNsdWRlICYmXG4gICAgICBpbmNsdWRlLmxlbmd0aCA+IDAgJiZcbiAgICAgIGluY2x1ZGUuaW5kZXhPZih0aGlzLnJlc291cmNlVHlwZU5hbWUpID09PSAtMVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGVyZSBhcmUgYW55IHRhZ3MgZGVmaW5lZFxuICAgKi9cbiAgcHVibGljIGhhc1RhZ3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGFncy5zaXplID4gMDtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFRhZyguLi50YWdzOiBUYWdbXSkge1xuICAgIGZvciAoY29uc3QgdGFnIG9mIHRhZ3MpIHtcbiAgICAgIGlmICh0YWcucHJpb3JpdHkgPj0gKHRoaXMucHJpb3JpdGllcy5nZXQodGFnLmtleSkgfHwgMCkpIHtcbiAgICAgICAgdGhpcy50YWdzLnNldCh0YWcua2V5LCB0YWcpO1xuICAgICAgICB0aGlzLnByaW9yaXRpZXMuc2V0KHRhZy5rZXksIHRhZy5wcmlvcml0eSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgc29ydGVkVGFncygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnRhZ3MudmFsdWVzKCkpLnNvcnQoKGEsIGIpID0+IGEua2V5LmxvY2FsZUNvbXBhcmUoYi5rZXkpKTtcbiAgfVxufVxuIl19