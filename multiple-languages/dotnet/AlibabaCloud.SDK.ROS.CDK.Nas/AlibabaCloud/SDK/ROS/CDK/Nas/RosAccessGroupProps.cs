using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::NAS::AccessGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-nas.RosAccessGroupProps")]
    public class RosAccessGroupProps : AlibabaCloud.SDK.ROS.CDK.Nas.IRosAccessGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accessGroupName: Permission group name
        /// </remarks>
        [JsiiProperty(name: "accessGroupName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AccessGroupName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: accessGroupType: Permission group type, including the Vpc and Classic types
        /// </remarks>
        [JsiiProperty(name: "accessGroupType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AccessGroupType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Permission group description. It is the same as the permission group name by default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }
    }
}
