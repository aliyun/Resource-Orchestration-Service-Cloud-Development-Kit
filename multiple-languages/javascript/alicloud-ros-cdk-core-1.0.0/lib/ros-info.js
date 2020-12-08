"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosInfo = void 0;
const ros_element_1 = require("./ros-element");
class RosInfo extends ros_element_1.RosElement {
    /**
     * Creates properties for this stack.
     * @param scope The parent construct.
     * @param props The value of the property.
     */
    constructor(scope, id, info) {
        super(scope, id);
        if (id !== RosInfo.formatVersion && id !== RosInfo.description && id !== RosInfo.metadata) {
            throw new Error(`The RosInfo id should be in these following scopes: formatVersion, description, Metadata.\n
        Use RosInfo.formatVersion, RosInfo.description and RosInfo.metadata to assign this parameter.
      `);
        }
        if (id === RosInfo.formatVersion && info !== RosInfo.v20150901) {
            throw new Error(`If you want to define the format version, you should use RosInfo.vXXXXX.\n
        ROS CDK support the folloowing version: RosInfo.v20150901
      `);
        }
        this.infoType = id;
        this._value = info;
    }
    /**
     * @internal
     */
    _toRosTemplate() {
        const temp = {};
        temp[this.infoType] = this._value;
        return temp;
    }
}
exports.RosInfo = RosInfo;
RosInfo.formatVersion = 'ROSTemplateFormatVersion';
RosInfo.description = 'Description';
RosInfo.metadata = 'Metadata';
RosInfo.v20150901 = '2015-09-01';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLWluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb3MtaW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwrQ0FBMkM7QUFFM0MsTUFBYSxPQUFRLFNBQVEsd0JBQVU7SUFTckM7Ozs7T0FJRztJQUNILFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsSUFBbUM7UUFDM0UsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFHLEVBQUUsS0FBSyxPQUFPLENBQUMsYUFBYSxJQUFJLEVBQUUsS0FBSyxPQUFPLENBQUMsV0FBVyxJQUFJLEVBQUUsS0FBSyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3hGLE1BQU0sSUFBSSxLQUFLLENBQUM7O09BRWYsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFHLEVBQUUsS0FBSyxPQUFPLENBQUMsYUFBYSxJQUFJLElBQUksS0FBSyxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQzdELE1BQU0sSUFBSSxLQUFLLENBQUM7O09BRWYsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxjQUFjO1FBQ25CLE1BQU0sSUFBSSxHQUFtQyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7QUF0Q0gsMEJBdUNDO0FBdENRLHFCQUFhLEdBQUcsMEJBQTBCLENBQUM7QUFDM0MsbUJBQVcsR0FBRyxhQUFhLENBQUM7QUFDNUIsZ0JBQVEsR0FBRyxVQUFVLENBQUM7QUFFdEIsaUJBQVMsR0FBRyxZQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICcuL2NvbnN0cnVjdC1jb21wYXQnO1xuaW1wb3J0IHsgUm9zRWxlbWVudCB9IGZyb20gJy4vcm9zLWVsZW1lbnQnO1xuXG5leHBvcnQgY2xhc3MgUm9zSW5mbyBleHRlbmRzIFJvc0VsZW1lbnQge1xuICBzdGF0aWMgZm9ybWF0VmVyc2lvbiA9ICdST1NUZW1wbGF0ZUZvcm1hdFZlcnNpb24nOyBcbiAgc3RhdGljIGRlc2NyaXB0aW9uID0gJ0Rlc2NyaXB0aW9uJzsgXG4gIHN0YXRpYyBtZXRhZGF0YSA9ICdNZXRhZGF0YSc7IFxuXG4gIHN0YXRpYyB2MjAxNTA5MDEgPSAnMjAxNS0wOS0wMSc7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfdmFsdWU6IHN0cmluZyB8IHt9O1xuICBwcml2YXRlIHJlYWRvbmx5IGluZm9UeXBlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBDcmVhdGVzIHByb3BlcnRpZXMgZm9yIHRoaXMgc3RhY2suXG4gICAqIEBwYXJhbSBzY29wZSBUaGUgcGFyZW50IGNvbnN0cnVjdC5cbiAgICogQHBhcmFtIHByb3BzIFRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBpbmZvOiBzdHJpbmcgfCB7W2tleTogc3RyaW5nXTogYW55fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgaWYoaWQgIT09IFJvc0luZm8uZm9ybWF0VmVyc2lvbiAmJiBpZCAhPT0gUm9zSW5mby5kZXNjcmlwdGlvbiAmJiBpZCAhPT0gUm9zSW5mby5tZXRhZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgUm9zSW5mbyBpZCBzaG91bGQgYmUgaW4gdGhlc2UgZm9sbG93aW5nIHNjb3BlczogZm9ybWF0VmVyc2lvbiwgZGVzY3JpcHRpb24sIE1ldGFkYXRhLlxcblxuICAgICAgICBVc2UgUm9zSW5mby5mb3JtYXRWZXJzaW9uLCBSb3NJbmZvLmRlc2NyaXB0aW9uIGFuZCBSb3NJbmZvLm1ldGFkYXRhIHRvIGFzc2lnbiB0aGlzIHBhcmFtZXRlci5cbiAgICAgIGApO1xuICAgIH1cblxuICAgIGlmKGlkID09PSBSb3NJbmZvLmZvcm1hdFZlcnNpb24gJiYgaW5mbyAhPT0gUm9zSW5mby52MjAxNTA5MDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSWYgeW91IHdhbnQgdG8gZGVmaW5lIHRoZSBmb3JtYXQgdmVyc2lvbiwgeW91IHNob3VsZCB1c2UgUm9zSW5mby52WFhYWFguXFxuXG4gICAgICAgIFJPUyBDREsgc3VwcG9ydCB0aGUgZm9sbG9vd2luZyB2ZXJzaW9uOiBSb3NJbmZvLnYyMDE1MDkwMVxuICAgICAgYCk7XG4gICAgfVxuICAgIHRoaXMuaW5mb1R5cGUgPSBpZDtcbiAgICB0aGlzLl92YWx1ZSA9IGluZm87XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgX3RvUm9zVGVtcGxhdGUoKTogb2JqZWN0IHtcbiAgICBjb25zdCB0ZW1wOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHt9IH0gPSB7fTtcbiAgICB0ZW1wW3RoaXMuaW5mb1R5cGVdID0gdGhpcy5fdmFsdWU7XG4gICAgcmV0dXJuIHRlbXA7XG4gIH1cbn1cbiJdfQ==