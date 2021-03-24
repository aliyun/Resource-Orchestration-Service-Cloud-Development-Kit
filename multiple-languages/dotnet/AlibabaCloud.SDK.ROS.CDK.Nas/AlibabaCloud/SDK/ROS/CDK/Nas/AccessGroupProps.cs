using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::NAS::AccessGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-nas.AccessGroupProps")]
    public class AccessGroupProps : AlibabaCloud.SDK.ROS.CDK.Nas.IAccessGroupProps
    {
        /// <summary>Property accessGroupName: Permission group name.</summary>
        [JsiiProperty(name: "accessGroupName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AccessGroupName
        {
            get;
            set;
        }

        /// <summary>Property accessGroupType: Permission group type, including the Vpc and Classic types.</summary>
        [JsiiProperty(name: "accessGroupType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AccessGroupType
        {
            get;
            set;
        }

        /// <summary>Property description: Permission group description.</summary>
        /// <remarks>
        /// It is the same as the permission group name by default.
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
