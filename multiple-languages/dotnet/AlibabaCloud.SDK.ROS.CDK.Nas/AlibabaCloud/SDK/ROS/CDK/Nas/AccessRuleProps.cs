using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::NAS::AccessRule`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-nas.AccessRuleProps")]
    public class AccessRuleProps : AlibabaCloud.SDK.ROS.CDK.Nas.IAccessRuleProps
    {
        /// <summary>Property accessGroupName: Permission group name.</summary>
        [JsiiProperty(name: "accessGroupName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AccessGroupName
        {
            get;
            set;
        }

        /// <summary>Property sourceCidrIp: Address or address segment.</summary>
        [JsiiProperty(name: "sourceCidrIp", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SourceCidrIp
        {
            get;
            set;
        }

        /// <summary>Property priority: Priority level.</summary>
        /// <remarks>
        /// Range: 1-100. Default value: 1
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Priority
        {
            get;
            set;
        }

        /// <summary>Property rwAccessType: Read-write permission type: RDWR (default), RDONLY.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "rwAccessType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RwAccessType
        {
            get;
            set;
        }

        /// <summary>Property userAccessType: User permission type: no_squash (default), root_squash, all_squash.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "userAccessType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? UserAccessType
        {
            get;
            set;
        }
    }
}
