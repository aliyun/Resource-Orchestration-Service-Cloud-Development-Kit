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
    RosParameterType["OOS_PARAMETER"] = "ALIYUN::OOS::Parameter::Value";
    RosParameterType["OOS_SECRET_PARAMETER"] = "ALIYUN::OOS::SecretParameter::Value";
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
                    AssociationPropertyMetadata: this.props.associationPropertyMetadata,
                    Confirm: this.props.confirm,
                    TextArea: this.props.textArea,
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
        // isAllowedValue(props, 'associationProperty', this, RosParameter.ASSOCIATION_PROPERTY_ALLOWED_VALUES);
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
    'ALIYUN::ECS::Instance::InstanceType',
    'ALIYUN::ECS::SecurityGroup::SecurityGroupId',
    'ALIYUN::RAM::Role',
    'ALIYUN::RAM::User',
    'ALIYUN::ECS::KeyPair::KeyPairName',
];
RosParameter.TYPE_ALLOWED_VALUES = ['String', 'Number', 'CommaDelimitedList', 'Json', 'Boolean',
    'ALIYUN::OOS::Parameter::Value', 'ALIYUN::OOS::SecretParameter::Value'];
(function (RosParameter) {
    class AssociationProperty {
    }
    AssociationProperty.ZONE_ID = 'ALIYUN::ECS::Instance::ZoneId';
    AssociationProperty.VPC_ID = 'ALIYUN::ECS::VPC::VPCId';
    AssociationProperty.IMAGE_ID = 'ALIYUN::ECS::Instance::ImageId';
    AssociationProperty.VSWITCH_ID = 'ALIYUN::ECS::VSwitch::VSwitchId';
    AssociationProperty.ECS_INSTANCE_TYPE = 'ALIYUN::ECS::Instance::InstanceType';
    AssociationProperty.SECURITY_GROUP_ID = 'ALIYUN::ECS::SecurityGroup::SecurityGroupId';
    AssociationProperty.RAM_ROLE = 'ALIYUN::RAM::Role';
    AssociationProperty.RAM_USER = 'ALIYUN::RAM::User';
    AssociationProperty.ECS_KEY_PAIR_NAME = 'ALIYUN::ECS::KeyPair::KeyPairName';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLXBhcmFtZXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvcy1wYXJhbWV0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQTJDO0FBRTNDLDJEQUF1RDtBQUV2RCxtQ0FBZ0M7QUFFaEMsSUFBWSxnQkFRWDtBQVJELFdBQVksZ0JBQWdCO0lBQzFCLHFDQUFpQixDQUFBO0lBQ2pCLHFDQUFpQixDQUFBO0lBQ2pCLGlDQUFhLENBQUE7SUFDYix1Q0FBbUIsQ0FBQTtJQUNuQiwrREFBMkMsQ0FBQTtJQUMzQyxtRUFBK0MsQ0FBQTtJQUMvQyxnRkFBNEQsQ0FBQTtBQUM5RCxDQUFDLEVBUlcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFRM0I7QUFzQkQ7Ozs7O0dBS0c7QUFDSCxNQUFhLFlBQWEsU0FBUSx3QkFBVTtJQW1CMUMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBbUIsUUFBMkIsRUFBRTtRQUN0RixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRHdDLFVBQUssR0FBTCxLQUFLLENBQXdCO1FBRXRGLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxJQUFJLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUNsRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxNQUFNO1FBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxLQUFLO1FBQ2QsT0FBTyw0QkFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxhQUFhO1FBQ3RCLElBQUksQ0FBQyxZQUFZ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LEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxTQUFTO0lBQ2pILCtCQUErQixFQUFFLHFDQUFxQyxDQUFDLENBQUM7QUFpSTVFLFdBQWlCLFlBQVk7SUFDM0IsTUFBYSxtQkFBbUI7O0lBQ1AsMkJBQU8sR0FBRywrQkFBK0IsQ0FBQztJQUMxQywwQkFBTSxHQUFHLHlCQUF5QixDQUFDO0lBQ25DLDRCQUFRLEdBQUcsZ0NBQWdDLENBQUM7SUFDNUMsOEJBQVUsR0FBRyxpQ0FBaUMsQ0FBQztJQUMvQyxxQ0FBaUIsR0FBRyxxQ0FBcUMsQ0FBQztJQUMxRCxxQ0FBaUIsR0FBRyw2Q0FBNkMsQ0FBQztJQUNsRSw0QkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBQy9CLDRCQUFRLEdBQUcsbUJBQW1CLENBQUM7SUFDL0IscUNBQWlCLEdBQUcsbUNBQW1DLENBQUM7SUFUcEUsZ0NBQW1CLHNCQVUvQixDQUFBO0FBQ0gsQ0FBQyxFQVpnQixZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQVk1QjtBQUVEOztHQUVHO0FBQ0gsU0FBUyxVQUFVLENBQUMsSUFBWTtJQUM5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0UsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxZQUFZLENBQUMsSUFBWTtJQUNoQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUM7QUFDM0IsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxZQUFZLENBQUMsSUFBWTtJQUNoQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRCx1Q0FBNEM7QUFDNUMsaUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm9zRWxlbWVudCB9IGZyb20gJy4vcm9zLWVsZW1lbnQnO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnLi9jb25zdHJ1Y3QtY29tcGF0JztcbmltcG9ydCB7IFJvc1JlZmVyZW5jZSB9IGZyb20gJy4vcHJpdmF0ZS9yb3MtcmVmZXJlbmNlJztcbmltcG9ydCB7IElSZXNvbHZhYmxlLCBJUmVzb2x2ZUNvbnRleHQgfSBmcm9tICcuL3Jlc29sdmFibGUnO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tICcuL3Rva2VuJztcblxuZXhwb3J0IGVudW0gUm9zUGFyYW1ldGVyVHlwZSB7XG4gIFNUUklORyA9ICdTdHJpbmcnLFxuICBOVU1CRVIgPSAnTnVtYmVyJyxcbiAgSlNPTiA9ICdKc29uJyxcbiAgQk9PTEVBTiA9ICdCb29sZWFuJyxcbiAgQ09NTUFEX0VMSU1JVEVEX0xJU1QgPSAnQ29tbWFEZWxpbWl0ZWRMaXN0JyxcbiAgT09TX1BBUkFNRVRFUiA9ICdBTElZVU46Ok9PUzo6UGFyYW1ldGVyOjpWYWx1ZScsXG4gIE9PU19TRUNSRVRfUEFSQU1FVEVSID0gJ0FMSVlVTjo6T09TOjpTZWNyZXRQYXJhbWV0ZXI6OlZhbHVlJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3NQYXJhbWV0ZXJQcm9wcyB7XG4gIHJlYWRvbmx5IHR5cGU/OiBSb3NQYXJhbWV0ZXJUeXBlO1xuICByZWFkb25seSBkZWZhdWx0VmFsdWU/OiBhbnk7XG4gIHJlYWRvbmx5IGFsbG93ZWRQYXR0ZXJuPzogc3RyaW5nO1xuICByZWFkb25seSBhbGxvd2VkVmFsdWVzPzogYW55W107XG4gIHJlYWRvbmx5IGNvbnN0cmFpbnREZXNjcmlwdGlvbj86IHN0cmluZyB8IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuICByZWFkb25seSBtYXhMZW5ndGg/OiBudW1iZXI7XG4gIHJlYWRvbmx5IG1heFZhbHVlPzogbnVtYmVyO1xuICByZWFkb25seSBtaW5MZW5ndGg/OiBudW1iZXI7XG4gIHJlYWRvbmx5IG1pblZhbHVlPzogbnVtYmVyO1xuICByZWFkb25seSBub0VjaG8/OiBib29sZWFuO1xuXG4gIHJlYWRvbmx5IGxhYmVsPzogc3RyaW5nO1xuICByZWFkb25seSBhc3NvY2lhdGlvblByb3BlcnR5Pzogc3RyaW5nO1xuICByZWFkb25seSBhc3NvY2lhdGlvblByb3BlcnR5TWV0YWRhdGE/OiB7W2tleTogc3RyaW5nXTogYW55fTtcbiAgcmVhZG9ubHkgY29uZmlybT86IGJvb2xlYW47XG4gIHJlYWRvbmx5IHRleHRBcmVhPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBBIFJPUyBwYXJhbWV0ZXIuXG4gKlxuICogUGFyYW1ldGVycyBlbmFibGUgeW91IHRvIGlucHV0IGN1c3RvbSB2YWx1ZXMgdG8geW91ciB0ZW1wbGF0ZSBlYWNoIHRpbWUgeW91IGNyZWF0ZSBvclxuICogdXBkYXRlIGEgc3RhY2suXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NQYXJhbWV0ZXIgZXh0ZW5kcyBSb3NFbGVtZW50IHsgXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVNTT0NJQVRJT05fUFJPUEVSVFlfQUxMT1dFRF9WQUxVRVM6IHN0cmluZ1tdID0gW1xuICAgICdBTElZVU46OkVDUzo6SW5zdGFuY2U6OkltYWdlSWQnLFxuICAgICdBTElZVU46OkVDUzo6SW5zdGFuY2U6OlpvbmVJZCcsXG4gICAgJ0FMSVlVTjo6RUNTOjpWUEM6OlZQQ0lkJyxcbiAgICAnQUxJWVVOOjpFQ1M6OlZTd2l0Y2g6OlZTd2l0Y2hJZCcsXG4gICAgJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZTo6SW5zdGFuY2VUeXBlJyxcbiAgICAnQUxJWVVOOjpFQ1M6OlNlY3VyaXR5R3JvdXA6OlNlY3VyaXR5R3JvdXBJZCcsXG4gICAgJ0FMSVlVTjo6UkFNOjpSb2xlJyxcbiAgICAnQUxJWVVOOjpSQU06OlVzZXInLFxuICAgICdBTElZVU46OkVDUzo6S2V5UGFpcjo6S2V5UGFpck5hbWUnLFxuICBdO1xuXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVFlQRV9BTExPV0VEX1ZBTFVFUzogc3RyaW5nW10gPSBbJ1N0cmluZycsICdOdW1iZXInLCAnQ29tbWFEZWxpbWl0ZWRMaXN0JywgJ0pzb24nLCAnQm9vbGVhbicsXG4gICAgJ0FMSVlVTjo6T09TOjpQYXJhbWV0ZXI6OlZhbHVlJywgJ0FMSVlVTjo6T09TOjpTZWNyZXRQYXJhbWV0ZXI6OlZhbHVlJ107XG5cbiAgcHJpdmF0ZSByZWFkb25seSB0eXBlOiBSb3NQYXJhbWV0ZXJUeXBlO1xuICBwcml2YXRlIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJpdmF0ZSByZWFkb25seSBwcm9wczogUm9zUGFyYW1ldGVyUHJvcHMgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudHlwZSA9IHByb3BzLnR5cGUgfHwgUm9zUGFyYW1ldGVyVHlwZS5TVFJJTkc7XG4gICAgdGhpcy52YWxpZGF0ZVByb3BlcnRpZXMocHJvcHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiB0aGlzIHBhcmFtZXRlciBpcyBjb25maWd1cmVkIHdpdGggXCJOb0VjaG9cIiBlbmFibGVkLlxuICAgKi9cbiAgcHVibGljIGdldCBub0VjaG8oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5wcm9wcy5ub0VjaG87XG4gIH1cblxuICAvKipcbiAgICogVGhlIHBhcmFtZXRlciB2YWx1ZSBhcyBhIFRva2VuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHZhbHVlKCk6IElSZXNvbHZhYmxlIHtcbiAgICByZXR1cm4gUm9zUmVmZXJlbmNlLmZvcih0aGlzLCAnUmVmJyk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHBhcmFtZXRlciB2YWx1ZSwgaWYgaXQgcmVwcmVzZW50cyBhIHN0cmluZy5cbiAgICovXG4gIHB1YmxpYyBnZXQgdmFsdWVBc1N0cmluZygpOiBzdHJpbmcge1xuICAgIGlmICghaXNTdHJpbmdUeXBlKHRoaXMudHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUGFyYW1ldGVyIHR5cGUgKCR7dGhpcy50eXBlfSkgaXMgbm90IGEgc3RyaW5nIHR5cGVgKTtcbiAgICB9XG4gICAgcmV0dXJuIFRva2VuLmFzU3RyaW5nKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwYXJhbWV0ZXIgdmFsdWUsIGlmIGl0IHJlcHJlc2VudHMgYSBzdHJpbmcuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHZhbHVlQXNCb29sZWFuKCk6IGFueSB7XG4gICAgaWYgKCFpc1N0cmluZ1R5cGUodGhpcy50eXBlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQYXJhbWV0ZXIgdHlwZSAoJHt0aGlzLnR5cGV9KSBpcyBub3QgYSBzdHJpbmcgdHlwZWApO1xuICAgIH1cbiAgICByZXR1cm4gVG9rZW4uYXNBbnkodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHBhcmFtZXRlciB2YWx1ZSwgaWYgaXQgcmVwcmVzZW50cyBhIHN0cmluZy5cbiAgICovXG4gIHB1YmxpYyBnZXQgdmFsdWVBc0FueSgpOiBhbnkge1xuICAgIHJldHVybiBUb2tlbi5hc0FueSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcGFyYW1ldGVyIHZhbHVlLCBpZiBpdCByZXByZXNlbnRzIGEgc3RyaW5nIGxpc3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHZhbHVlQXNMaXN0KCk6IHN0cmluZ1tdIHtcbiAgICBpZiAoIWlzTGlzdFR5cGUodGhpcy50eXBlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQYXJhbWV0ZXIgdHlwZSAoJHt0aGlzLnR5cGV9KSBpcyBub3QgYSBzdHJpbmcgbGlzdCB0eXBlYCk7XG4gICAgfVxuICAgIHJldHVybiBUb2tlbi5hc0xpc3QodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHBhcmFtZXRlciB2YWx1ZSwgaWYgaXQgcmVwcmVzZW50cyBhIG51bWJlci5cbiAgICovXG4gIHB1YmxpYyBnZXQgdmFsdWVBc051bWJlcigpOiBudW1iZXIge1xuICAgIGlmICghaXNOdW1iZXJUeXBlKHRoaXMudHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUGFyYW1ldGVyIHR5cGUgKCR7dGhpcy50eXBlfSkgaXMgbm90IGEgbnVtYmVyIHR5cGVgKTtcbiAgICB9XG4gICAgcmV0dXJuIFRva2VuLmFzTnVtYmVyKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIF90b1Jvc1RlbXBsYXRlKCk6IG9iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFBhcmFtZXRlcnM6IHtcbiAgICAgICAgW3RoaXMuaWRdOiB7XG4gICAgICAgICAgVHlwZTogdGhpcy50eXBlLFxuICAgICAgICAgIERlZmF1bHQ6IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgIEFsbG93ZWRQYXR0ZXJuOiB0aGlzLnByb3BzLmFsbG93ZWRQYXR0ZXJuLFxuICAgICAgICAgIEFsbG93ZWRWYWx1ZXM6IHRoaXMucHJvcHMuYWxsb3dlZFZhbHVlcyxcbiAgICAgICAgICBDb25zdHJhaW50RGVzY3JpcHRpb246IHRoaXMucHJvcHMuY29uc3RyYWludERlc2NyaXB0aW9uLFxuICAgICAgICAgIERlc2NyaXB0aW9uOiB0aGlzLnByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIE1heExlbmd0aDogdGhpcy5wcm9wcy5tYXhMZW5ndGgsXG4gICAgICAgICAgTWF4VmFsdWU6IHRoaXMucHJvcHMubWF4VmFsdWUsXG4gICAgICAgICAgTWluTGVuZ3RoOiB0aGlzLnByb3BzLm1pbkxlbmd0aCxcbiAgICAgICAgICBNaW5WYWx1ZTogdGhpcy5wcm9wcy5taW5WYWx1ZSxcbiAgICAgICAgICBOb0VjaG86IHRoaXMucHJvcHMubm9FY2hvLFxuICAgICAgICAgIExhYmVsOiB0aGlzLnByb3BzLmxhYmVsLFxuICAgICAgICAgIEFzc29jaWF0aW9uUHJvcGVydHk6IHRoaXMucHJvcHMuYXNzb2NpYXRpb25Qcm9wZXJ0eSxcbiAgICAgICAgICBBc3NvY2lhdGlvblByb3BlcnR5TWV0YWRhdGE6IHRoaXMucHJvcHMuYXNzb2NpYXRpb25Qcm9wZXJ0eU1ldGFkYXRhLFxuICAgICAgICAgIENvbmZpcm06IHRoaXMucHJvcHMuY29uZmlybSxcbiAgICAgICAgICBUZXh0QXJlYTogdGhpcy5wcm9wcy50ZXh0QXJlYSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyByZXNvbHZlKF9jb250ZXh0OiBJUmVzb2x2ZUNvbnRleHQpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgcHVibGljIHZhbGlkYXRlUHJvcGVydGllcyhwcm9wczogUm9zUGFyYW1ldGVyUHJvcHMgPSB7fSk6IHZvaWQge1xuICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXMgaXMgaW4gcGFyYW1ldGVyKHByb3BzKVxuICAgIHJlcXVpcmVQcm9wZXJ0eShwcm9wcywgJ3R5cGUnLCB0aGlzKTtcbiAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSBhc3NvY2lhdGlvblByb3BlcnR5IGlzIGFsbG93ZWQgdmFsdWVcbiAgICAvLyBpc0FsbG93ZWRWYWx1ZShwcm9wcywgJ2Fzc29jaWF0aW9uUHJvcGVydHknLCB0aGlzLCBSb3NQYXJhbWV0ZXIuQVNTT0NJQVRJT05fUFJPUEVSVFlfQUxMT1dFRF9WQUxVRVMpO1xuICAgIC8vIGNoZWNrIHRoZSB0eXBlIG9mIHRoaXMgcGFyYW1ldGVyIGlzIGFsbG93ZWRcbiAgICBpc0FsbG93ZWRWYWx1ZShwcm9wcywgJ3R5cGUnLCB0aGlzLCBSb3NQYXJhbWV0ZXIuVFlQRV9BTExPV0VEX1ZBTFVFUyk7XG4gICAgLy8gY2hlY2sgd2hldGhlciB0aGUgbWF4IGxlbmd0aCBvZiBzdHJpbmcgaXMgbGFyZ2VyIHRoYW4gdGhlIG1pbiBsZW5ndGhcbiAgICBpZiAocHJvcHMubWF4TGVuZ3RoICYmIHByb3BzLm1pbkxlbmd0aCAmJiBwcm9wcy5tYXhMZW5ndGggPCBwcm9wcy5taW5MZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIG1heCBsZW5ndGggb2Ygc3RyaW5nIG9mIHRoZSBwYXJhbWV0ZXIgJHt0aGlzLnRvU3RyaW5nKCl9IGlzIGxvd2VyIHRoYW4gaXRzIG1pbiBsZW5ndGguYCk7XG4gICAgfVxuICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIG1heCB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciBpcyBsYXJnZXIgdGhhbiB0aGUgbWluIHZhbHVlXG4gICAgaWYgKHByb3BzLm1heFZhbHVlICYmIHByb3BzLm1pblZhbHVlICYmIHByb3BzLm1heFZhbHVlIDwgcHJvcHMubWluVmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIG1heCB2YWx1ZSBvZiB0aGUgcGFyYW1ldGVyICR7dGhpcy50b1N0cmluZygpfSBpcyBsb3dlciB0aGFuIGl0cyBtaW4gdmFsdWUuYCk7XG4gICAgfVxuICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIFwiY29uZmlybVwiIHByb3BlcnR5IGlzIGFsbG93ZWQgdG8gYmUgc2V0IFwidHJ1ZVwiXG4gICAgaWYgKHByb3BzLmNvbmZpcm0gJiYgKHByb3BzLnR5cGUgIT09ICdTdHJpbmcnIHx8ICFwcm9wcy5ub0VjaG8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUaGUgcHJvcGVydHkgXCJjb25maXJtXCIgb2YgdGhlIHBhcmFtZXRlciAke3RoaXMudG9TdHJpbmcoKX0gY291bGQgYmUgdHJ1ZSBvbmx5IGlmIHR5cGUgaXMgXCJTdHJpbmdcIiBhbmQgXCJub0VjaG9cIiBpcyB0cnVlLmAsXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1BhcmFtZXRlciB7XG4gIGV4cG9ydCBjbGFzcyBBc3NvY2lhdGlvblByb3BlcnR5IHtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFpPTkVfSUQgPSAnQUxJWVVOOjpFQ1M6Okluc3RhbmNlOjpab25lSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVlBDX0lEID0gJ0FMSVlVTjo6RUNTOjpWUEM6OlZQQ0lkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElNQUdFX0lEID0gJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZTo6SW1hZ2VJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBWU1dJVENIX0lEID0gJ0FMSVlVTjo6RUNTOjpWU3dpdGNoOjpWU3dpdGNoSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX0lOU1RBTkNFX1RZUEUgPSAnQUxJWVVOOjpFQ1M6Okluc3RhbmNlOjpJbnN0YW5jZVR5cGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU0VDVVJJVFlfR1JPVVBfSUQgPSAnQUxJWVVOOjpFQ1M6OlNlY3VyaXR5R3JvdXA6OlNlY3VyaXR5R3JvdXBJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSQU1fUk9MRSA9ICdBTElZVU46OlJBTTo6Um9sZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSQU1fVVNFUiA9ICdBTElZVU46OlJBTTo6VXNlcic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfS0VZX1BBSVJfTkFNRSA9ICdBTElZVU46OkVDUzo6S2V5UGFpcjo6S2V5UGFpck5hbWUnO1xuICB9IFxufVxuXG4vKipcbiAqIFdoZXRoZXIgdGhlIGdpdmVuIHBhcmFtZXRlciB0eXBlIGxvb2tzIGxpa2UgYSBsaXN0IHR5cGVcbiAqL1xuZnVuY3Rpb24gaXNMaXN0VHlwZSh0eXBlOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHR5cGUuaW5kZXhPZignTGlzdDwnKSA+PSAwIHx8IHR5cGUuaW5kZXhPZignQ29tbWFEZWxpbWl0ZWRMaXN0JykgPj0gMDtcbn1cblxuLyoqXG4gKiBXaGV0aGVyIHRoZSBnaXZlbiBwYXJhbWV0ZXIgdHlwZSBsb29rcyBsaWtlIGEgbnVtYmVyIHR5cGVcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXJUeXBlKHR5cGU6IHN0cmluZykge1xuICByZXR1cm4gdHlwZSA9PT0gJ051bWJlcic7XG59XG5cbi8qKlxuICogV2hldGhlciB0aGUgZ2l2ZW4gcGFyYW1ldGVyIHR5cGUgbG9va3MgbGlrZSBhIHN0cmluZyB0eXBlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nVHlwZSh0eXBlOiBzdHJpbmcpIHtcbiAgcmV0dXJuICFpc0xpc3RUeXBlKHR5cGUpICYmICFpc051bWJlclR5cGUodHlwZSk7XG59XG5cbmltcG9ydCB7IHJlcXVpcmVQcm9wZXJ0eSB9IGZyb20gJy4vcnVudGltZSc7XG5pbXBvcnQgeyBpc0FsbG93ZWRWYWx1ZSB9IGZyb20gJy4vdXRpbCc7XG4iXX0=