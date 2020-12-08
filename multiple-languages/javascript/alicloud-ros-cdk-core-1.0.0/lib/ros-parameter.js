"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosParameter = exports.RosParameterType = void 0;
const ros_element_1 = require("./ros-element");
const ros_reference_1 = require("./private/ros-reference");
const token_1 = require("./token");
var RosParameterType;
(function (RosParameterType) {
    RosParameterType["STRING"] = "String";
    RosParameterType["NUMBER"] = "Number";
    RosParameterType["JSON"] = "Json";
    RosParameterType["BOOLEAN"] = "Boolean";
    RosParameterType["COMMAD_ELIMITED_LIST"] = "CommaDelimitedList";
})(RosParameterType = exports.RosParameterType || (exports.RosParameterType = {}));
/**
 * A ROS parameter.
 *
 * Parameters enable you to input custom values to your template each time you create or
 * update a stack.
 */
class RosParameter extends ros_element_1.RosElement {
    constructor(scope, id, props = {}) {
        super(scope, id);
        this.props = props;
        this.id = id;
        this.type = props.type || RosParameterType.STRING;
        this.validateProperties(props);
    }
    /**
     * Indicates if this parameter is configured with "NoEcho" enabled.
     */
    get noEcho() {
        return !!this.props.noEcho;
    }
    /**
     * The parameter value as a Token
     */
    get value() {
        return ros_reference_1.RosReference.for(this, 'Ref');
    }
    /**
     * The parameter value, if it represents a string.
     */
    get valueAsString() {
        if (!isStringType(this.type)) {
            throw new Error(`Parameter type (${this.type}) is not a string type`);
        }
        return token_1.Token.asString(this.value);
    }
    /**
     * The parameter value, if it represents a string.
     */
    get valueAsBoolean() {
        if (!isStringType(this.type)) {
            throw new Error(`Parameter type (${this.type}) is not a string type`);
        }
        return token_1.Token.asAny(this.value);
    }
    /**
     * The parameter value, if it represents a string.
     */
    get valueAsAny() {
        return token_1.Token.asAny(this.value);
    }
    /**
     * The parameter value, if it represents a string list.
     */
    get valueAsList() {
        if (!isListType(this.type)) {
            throw new Error(`Parameter type (${this.type}) is not a string list type`);
        }
        return token_1.Token.asList(this.value);
    }
    /**
     * The parameter value, if it represents a number.
     */
    get valueAsNumber() {
        if (!isNumberType(this.type)) {
            throw new Error(`Parameter type (${this.type}) is not a number type`);
        }
        return token_1.Token.asNumber(this.value);
    }
    /**
     * @internal
     */
    _toRosTemplate() {
        return {
            Parameters: {
                [this.id]: {
                    Type: this.type,
                    Default: this.props.defaultValue,
                    AllowedPattern: this.props.allowedPattern,
                    AllowedValues: this.props.allowedValues,
                    ConstraintDescription: this.props.constraintDescription,
                    Description: this.props.description,
                    MaxLength: this.props.maxLength,
                    MaxValue: this.props.maxValue,
                    MinLength: this.props.minLength,
                    MinValue: this.props.minValue,
                    NoEcho: this.props.noEcho,
                    Label: this.props.label,
                    AssociationProperty: this.props.associationProperty,
                    Confirm: this.props.confirm,
                },
            },
        };
    }
    resolve(_context) {
        return this.value;
    }
    validateProperties(props = {}) {
        // check whether the required properties is in parameter(props)
        runtime_1.requireProperty(props, 'type', this);
        // check whether the associationProperty is allowed value
        util_1.isAllowedValue(props, 'associationProperty', this, RosParameter.ASSOCIATION_PROPERTY_ALLOWED_VALUES);
        // check the type of this parameter is allowed
        util_1.isAllowedValue(props, 'type', this, RosParameter.TYPE_ALLOWED_VALUES);
        // check whether the max length of string is larger than the min length
        if (props.maxLength && props.minLength && props.maxLength < props.minLength) {
            throw new Error(`The max length of string of the parameter ${this.toString()} is lower than its min length.`);
        }
        // check whether the max value of this parameter is larger than the min value
        if (props.maxValue && props.minValue && props.maxValue < props.minValue) {
            throw new Error(`The max value of the parameter ${this.toString()} is lower than its min value.`);
        }
        // check whether the "confirm" property is allowed to be set "true"
        if (props.confirm && (props.type !== 'String' || !props.noEcho)) {
            throw new Error(`The property "confirm" of the parameter ${this.toString()} could be true only if type is "String" and "noEcho" is true.`);
        }
    }
}
exports.RosParameter = RosParameter;
RosParameter.ASSOCIATION_PROPERTY_ALLOWED_VALUES = [
    'ALIYUN::ECS::Instance::ImageId',
    'ALIYUN::ECS::Instance::ZoneId',
    'ALIYUN::ECS::VPC::VPCId',
    'ALIYUN::ECS::VSwitch::VSwitchId',
];
RosParameter.TYPE_ALLOWED_VALUES = ['String', 'Number', 'CommaDelimitedList', 'Json', 'Boolean'];
(function (RosParameter) {
    class AssociationProperty {
    }
    AssociationProperty.ZONE_ID = 'ALIYUN::ECS::Instance::ZoneId';
    AssociationProperty.VPC_ID = 'ALIYUN::ECS::VPC::VPCId';
    AssociationProperty.IMAGE_ID = 'ALIYUN::ECS::Instance::ImageId';
    AssociationProperty.VSWITCH_ID = 'ALIYUN::ECS::VSwitch::VSwitchId';
    RosParameter.AssociationProperty = AssociationProperty;
})(RosParameter = exports.RosParameter || (exports.RosParameter = {}));
/**
 * Whether the given parameter type looks like a list type
 */
function isListType(type) {
    return type.indexOf('List<') >= 0 || type.indexOf('CommaDelimitedList') >= 0;
}
/**
 * Whether the given parameter type looks like a number type
 */
function isNumberType(type) {
    return type === 'Number';
}
/**
 * Whether the given parameter type looks like a string type
 */
function isStringType(type) {
    return !isListType(type) && !isNumberType(type);
}
const runtime_1 = require("./runtime");
const util_1 = require("./util");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLXBhcmFtZXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvcy1wYXJhbWV0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQTJDO0FBRTNDLDJEQUF1RDtBQUV2RCxtQ0FBZ0M7QUFFaEMsSUFBWSxnQkFNWDtBQU5ELFdBQVksZ0JBQWdCO0lBQzFCLHFDQUFpQixDQUFBO0lBQ2pCLHFDQUFpQixDQUFBO0lBQ2pCLGlDQUFhLENBQUE7SUFDYix1Q0FBbUIsQ0FBQTtJQUNuQiwrREFBMkMsQ0FBQTtBQUM3QyxDQUFDLEVBTlcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFNM0I7QUFvQkQ7Ozs7O0dBS0c7QUFDSCxNQUFhLFlBQWEsU0FBUSx3QkFBVTtJQWExQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFtQixRQUEyQixFQUFFO1FBQ3RGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFEd0MsVUFBSyxHQUFMLEtBQUssQ0FBd0I7UUFFdEYsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBQ2xELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLE1BQU07UUFDZixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLEtBQUs7UUFDZCxPQUFPLDRCQUFZLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUIs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QU0sR0FBRyx5QkFBeUIsQ0FBQztJQUNuQyw0QkFBUSxHQUFHLGdDQUFnQyxDQUFDO0lBQzVDLDhCQUFVLEdBQUcsaUNBQWlDLENBQUM7SUFKM0QsZ0NBQW1CLHNCQUsvQixDQUFBO0FBQ0gsQ0FBQyxFQVBnQixZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQU81QjtBQUVEOztHQUVHO0FBQ0gsU0FBUyxVQUFVLENBQUMsSUFBWTtJQUM5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0UsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxZQUFZLENBQUMsSUFBWTtJQUNoQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUM7QUFDM0IsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxZQUFZLENBQUMsSUFBWTtJQUNoQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRCx1Q0FBNEM7QUFDNUMsaUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm9zRWxlbWVudCB9IGZyb20gJy4vcm9zLWVsZW1lbnQnO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnLi9jb25zdHJ1Y3QtY29tcGF0JztcbmltcG9ydCB7IFJvc1JlZmVyZW5jZSB9IGZyb20gJy4vcHJpdmF0ZS9yb3MtcmVmZXJlbmNlJztcbmltcG9ydCB7IElSZXNvbHZhYmxlLCBJUmVzb2x2ZUNvbnRleHQgfSBmcm9tICcuL3Jlc29sdmFibGUnO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tICcuL3Rva2VuJztcblxuZXhwb3J0IGVudW0gUm9zUGFyYW1ldGVyVHlwZSB7XG4gIFNUUklORyA9ICdTdHJpbmcnLFxuICBOVU1CRVIgPSAnTnVtYmVyJyxcbiAgSlNPTiA9ICdKc29uJyxcbiAgQk9PTEVBTiA9ICdCb29sZWFuJyxcbiAgQ09NTUFEX0VMSU1JVEVEX0xJU1QgPSAnQ29tbWFEZWxpbWl0ZWRMaXN0Jyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3NQYXJhbWV0ZXJQcm9wcyB7XG4gIHJlYWRvbmx5IHR5cGU/OiBSb3NQYXJhbWV0ZXJUeXBlO1xuICByZWFkb25seSBkZWZhdWx0VmFsdWU/OiBhbnk7XG4gIHJlYWRvbmx5IGFsbG93ZWRQYXR0ZXJuPzogc3RyaW5nO1xuICByZWFkb25seSBhbGxvd2VkVmFsdWVzPzogYW55W107XG4gIHJlYWRvbmx5IGNvbnN0cmFpbnREZXNjcmlwdGlvbj86IHN0cmluZztcbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHJlYWRvbmx5IG1heExlbmd0aD86IG51bWJlcjtcbiAgcmVhZG9ubHkgbWF4VmFsdWU/OiBudW1iZXI7XG4gIHJlYWRvbmx5IG1pbkxlbmd0aD86IG51bWJlcjtcbiAgcmVhZG9ubHkgbWluVmFsdWU/OiBudW1iZXI7XG4gIHJlYWRvbmx5IG5vRWNobz86IGJvb2xlYW47XG5cbiAgcmVhZG9ubHkgbGFiZWw/OiBzdHJpbmc7XG4gIHJlYWRvbmx5IGFzc29jaWF0aW9uUHJvcGVydHk/OiBzdHJpbmc7XG4gIHJlYWRvbmx5IGNvbmZpcm0/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEEgUk9TIHBhcmFtZXRlci5cbiAqXG4gKiBQYXJhbWV0ZXJzIGVuYWJsZSB5b3UgdG8gaW5wdXQgY3VzdG9tIHZhbHVlcyB0byB5b3VyIHRlbXBsYXRlIGVhY2ggdGltZSB5b3UgY3JlYXRlIG9yXG4gKiB1cGRhdGUgYSBzdGFjay5cbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1BhcmFtZXRlciBleHRlbmRzIFJvc0VsZW1lbnQgeyBcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBBU1NPQ0lBVElPTl9QUk9QRVJUWV9BTExPV0VEX1ZBTFVFUzogc3RyaW5nW10gPSBbXG4gICAgJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZTo6SW1hZ2VJZCcsXG4gICAgJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZTo6Wm9uZUlkJyxcbiAgICAnQUxJWVVOOjpFQ1M6OlZQQzo6VlBDSWQnLFxuICAgICdBTElZVU46OkVDUzo6VlN3aXRjaDo6VlN3aXRjaElkJyxcbiAgXTtcblxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRZUEVfQUxMT1dFRF9WQUxVRVM6IHN0cmluZ1tdID0gWydTdHJpbmcnLCAnTnVtYmVyJywgJ0NvbW1hRGVsaW1pdGVkTGlzdCcsICdKc29uJywgJ0Jvb2xlYW4nXTtcblxuICBwcml2YXRlIHJlYWRvbmx5IHR5cGU6IFJvc1BhcmFtZXRlclR5cGU7XG4gIHByaXZhdGUgcmVhZG9ubHkgaWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcml2YXRlIHJlYWRvbmx5IHByb3BzOiBSb3NQYXJhbWV0ZXJQcm9wcyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy50eXBlID0gcHJvcHMudHlwZSB8fCBSb3NQYXJhbWV0ZXJUeXBlLlNUUklORztcbiAgICB0aGlzLnZhbGlkYXRlUHJvcGVydGllcyhwcm9wcyk7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRoaXMgcGFyYW1ldGVyIGlzIGNvbmZpZ3VyZWQgd2l0aCBcIk5vRWNob1wiIGVuYWJsZWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IG5vRWNobygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLnByb3BzLm5vRWNobztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcGFyYW1ldGVyIHZhbHVlIGFzIGEgVG9rZW5cbiAgICovXG4gIHB1YmxpYyBnZXQgdmFsdWUoKTogSVJlc29sdmFibGUge1xuICAgIHJldHVybiBSb3NSZWZlcmVuY2UuZm9yKHRoaXMsICdSZWYnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcGFyYW1ldGVyIHZhbHVlLCBpZiBpdCByZXByZXNlbnRzIGEgc3RyaW5nLlxuICAgKi9cbiAgcHVibGljIGdldCB2YWx1ZUFzU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgaWYgKCFpc1N0cmluZ1R5cGUodGhpcy50eXBlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQYXJhbWV0ZXIgdHlwZSAoJHt0aGlzLnR5cGV9KSBpcyBub3QgYSBzdHJpbmcgdHlwZWApO1xuICAgIH1cbiAgICByZXR1cm4gVG9rZW4uYXNTdHJpbmcodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHBhcmFtZXRlciB2YWx1ZSwgaWYgaXQgcmVwcmVzZW50cyBhIHN0cmluZy5cbiAgICovXG4gIHB1YmxpYyBnZXQgdmFsdWVBc0Jvb2xlYW4oKTogYW55IHtcbiAgICBpZiAoIWlzU3RyaW5nVHlwZSh0aGlzLnR5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBhcmFtZXRlciB0eXBlICgke3RoaXMudHlwZX0pIGlzIG5vdCBhIHN0cmluZyB0eXBlYCk7XG4gICAgfVxuICAgIHJldHVybiBUb2tlbi5hc0FueSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcGFyYW1ldGVyIHZhbHVlLCBpZiBpdCByZXByZXNlbnRzIGEgc3RyaW5nLlxuICAgKi9cbiAgcHVibGljIGdldCB2YWx1ZUFzQW55KCk6IGFueSB7XG4gICAgcmV0dXJuIFRva2VuLmFzQW55KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwYXJhbWV0ZXIgdmFsdWUsIGlmIGl0IHJlcHJlc2VudHMgYSBzdHJpbmcgbGlzdC5cbiAgICovXG4gIHB1YmxpYyBnZXQgdmFsdWVBc0xpc3QoKTogc3RyaW5nW10ge1xuICAgIGlmICghaXNMaXN0VHlwZSh0aGlzLnR5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBhcmFtZXRlciB0eXBlICgke3RoaXMudHlwZX0pIGlzIG5vdCBhIHN0cmluZyBsaXN0IHR5cGVgKTtcbiAgICB9XG4gICAgcmV0dXJuIFRva2VuLmFzTGlzdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcGFyYW1ldGVyIHZhbHVlLCBpZiBpdCByZXByZXNlbnRzIGEgbnVtYmVyLlxuICAgKi9cbiAgcHVibGljIGdldCB2YWx1ZUFzTnVtYmVyKCk6IG51bWJlciB7XG4gICAgaWYgKCFpc051bWJlclR5cGUodGhpcy50eXBlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQYXJhbWV0ZXIgdHlwZSAoJHt0aGlzLnR5cGV9KSBpcyBub3QgYSBudW1iZXIgdHlwZWApO1xuICAgIH1cbiAgICByZXR1cm4gVG9rZW4uYXNOdW1iZXIodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgX3RvUm9zVGVtcGxhdGUoKTogb2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgUGFyYW1ldGVyczoge1xuICAgICAgICBbdGhpcy5pZF06IHtcbiAgICAgICAgICBUeXBlOiB0aGlzLnR5cGUsXG4gICAgICAgICAgRGVmYXVsdDogdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgQWxsb3dlZFBhdHRlcm46IHRoaXMucHJvcHMuYWxsb3dlZFBhdHRlcm4sXG4gICAgICAgICAgQWxsb3dlZFZhbHVlczogdGhpcy5wcm9wcy5hbGxvd2VkVmFsdWVzLFxuICAgICAgICAgIENvbnN0cmFpbnREZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5jb25zdHJhaW50RGVzY3JpcHRpb24sXG4gICAgICAgICAgRGVzY3JpcHRpb246IHRoaXMucHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgTWF4TGVuZ3RoOiB0aGlzLnByb3BzLm1heExlbmd0aCxcbiAgICAgICAgICBNYXhWYWx1ZTogdGhpcy5wcm9wcy5tYXhWYWx1ZSxcbiAgICAgICAgICBNaW5MZW5ndGg6IHRoaXMucHJvcHMubWluTGVuZ3RoLFxuICAgICAgICAgIE1pblZhbHVlOiB0aGlzLnByb3BzLm1pblZhbHVlLFxuICAgICAgICAgIE5vRWNobzogdGhpcy5wcm9wcy5ub0VjaG8sXG4gICAgICAgICAgTGFiZWw6IHRoaXMucHJvcHMubGFiZWwsXG4gICAgICAgICAgQXNzb2NpYXRpb25Qcm9wZXJ0eTogdGhpcy5wcm9wcy5hc3NvY2lhdGlvblByb3BlcnR5LFxuICAgICAgICAgIENvbmZpcm06IHRoaXMucHJvcHMuY29uZmlybSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyByZXNvbHZlKF9jb250ZXh0OiBJUmVzb2x2ZUNvbnRleHQpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgcHVibGljIHZhbGlkYXRlUHJvcGVydGllcyhwcm9wczogUm9zUGFyYW1ldGVyUHJvcHMgPSB7fSk6IHZvaWQge1xuICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXMgaXMgaW4gcGFyYW1ldGVyKHByb3BzKVxuICAgIHJlcXVpcmVQcm9wZXJ0eShwcm9wcywgJ3R5cGUnLCB0aGlzKTtcbiAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSBhc3NvY2lhdGlvblByb3BlcnR5IGlzIGFsbG93ZWQgdmFsdWVcbiAgICBpc0FsbG93ZWRWYWx1ZShwcm9wcywgJ2Fzc29jaWF0aW9uUHJvcGVydHknLCB0aGlzLCBSb3NQYXJhbWV0ZXIuQVNTT0NJQVRJT05fUFJPUEVSVFlfQUxMT1dFRF9WQUxVRVMpO1xuICAgIC8vIGNoZWNrIHRoZSB0eXBlIG9mIHRoaXMgcGFyYW1ldGVyIGlzIGFsbG93ZWRcbiAgICBpc0FsbG93ZWRWYWx1ZShwcm9wcywgJ3R5cGUnLCB0aGlzLCBSb3NQYXJhbWV0ZXIuVFlQRV9BTExPV0VEX1ZBTFVFUyk7XG4gICAgLy8gY2hlY2sgd2hldGhlciB0aGUgbWF4IGxlbmd0aCBvZiBzdHJpbmcgaXMgbGFyZ2VyIHRoYW4gdGhlIG1pbiBsZW5ndGhcbiAgICBpZiAocHJvcHMubWF4TGVuZ3RoICYmIHByb3BzLm1pbkxlbmd0aCAmJiBwcm9wcy5tYXhMZW5ndGggPCBwcm9wcy5taW5MZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIG1heCBsZW5ndGggb2Ygc3RyaW5nIG9mIHRoZSBwYXJhbWV0ZXIgJHt0aGlzLnRvU3RyaW5nKCl9IGlzIGxvd2VyIHRoYW4gaXRzIG1pbiBsZW5ndGguYCk7XG4gICAgfVxuICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIG1heCB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciBpcyBsYXJnZXIgdGhhbiB0aGUgbWluIHZhbHVlXG4gICAgaWYgKHByb3BzLm1heFZhbHVlICYmIHByb3BzLm1pblZhbHVlICYmIHByb3BzLm1heFZhbHVlIDwgcHJvcHMubWluVmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIG1heCB2YWx1ZSBvZiB0aGUgcGFyYW1ldGVyICR7dGhpcy50b1N0cmluZygpfSBpcyBsb3dlciB0aGFuIGl0cyBtaW4gdmFsdWUuYCk7XG4gICAgfVxuICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIFwiY29uZmlybVwiIHByb3BlcnR5IGlzIGFsbG93ZWQgdG8gYmUgc2V0IFwidHJ1ZVwiXG4gICAgaWYgKHByb3BzLmNvbmZpcm0gJiYgKHByb3BzLnR5cGUgIT09ICdTdHJpbmcnIHx8ICFwcm9wcy5ub0VjaG8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUaGUgcHJvcGVydHkgXCJjb25maXJtXCIgb2YgdGhlIHBhcmFtZXRlciAke3RoaXMudG9TdHJpbmcoKX0gY291bGQgYmUgdHJ1ZSBvbmx5IGlmIHR5cGUgaXMgXCJTdHJpbmdcIiBhbmQgXCJub0VjaG9cIiBpcyB0cnVlLmAsXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1BhcmFtZXRlciB7XG4gIGV4cG9ydCBjbGFzcyBBc3NvY2lhdGlvblByb3BlcnR5IHtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFpPTkVfSUQgPSAnQUxJWVVOOjpFQ1M6Okluc3RhbmNlOjpab25lSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVlBDX0lEID0gJ0FMSVlVTjo6RUNTOjpWUEM6OlZQQ0lkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElNQUdFX0lEID0gJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZTo6SW1hZ2VJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBWU1dJVENIX0lEID0gJ0FMSVlVTjo6RUNTOjpWU3dpdGNoOjpWU3dpdGNoSWQnO1xuICB9IFxufVxuXG4vKipcbiAqIFdoZXRoZXIgdGhlIGdpdmVuIHBhcmFtZXRlciB0eXBlIGxvb2tzIGxpa2UgYSBsaXN0IHR5cGVcbiAqL1xuZnVuY3Rpb24gaXNMaXN0VHlwZSh0eXBlOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHR5cGUuaW5kZXhPZignTGlzdDwnKSA+PSAwIHx8IHR5cGUuaW5kZXhPZignQ29tbWFEZWxpbWl0ZWRMaXN0JykgPj0gMDtcbn1cblxuLyoqXG4gKiBXaGV0aGVyIHRoZSBnaXZlbiBwYXJhbWV0ZXIgdHlwZSBsb29rcyBsaWtlIGEgbnVtYmVyIHR5cGVcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXJUeXBlKHR5cGU6IHN0cmluZykge1xuICByZXR1cm4gdHlwZSA9PT0gJ051bWJlcic7XG59XG5cbi8qKlxuICogV2hldGhlciB0aGUgZ2l2ZW4gcGFyYW1ldGVyIHR5cGUgbG9va3MgbGlrZSBhIHN0cmluZyB0eXBlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nVHlwZSh0eXBlOiBzdHJpbmcpIHtcbiAgcmV0dXJuICFpc0xpc3RUeXBlKHR5cGUpICYmICFpc051bWJlclR5cGUodHlwZSk7XG59XG5cbmltcG9ydCB7IHJlcXVpcmVQcm9wZXJ0eSB9IGZyb20gJy4vcnVudGltZSc7XG5pbXBvcnQgeyBpc0FsbG93ZWRWYWx1ZSB9IGZyb20gJy4vdXRpbCc7XG4iXX0=