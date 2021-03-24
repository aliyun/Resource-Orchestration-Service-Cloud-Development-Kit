using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAG::ACLAssociation`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sag.ACLAssociationProps")]
    public class ACLAssociationProps : AlibabaCloud.SDK.ROS.CDK.Sag.IACLAssociationProps
    {
        /// <summary>Property aclId: Access control ID.</summary>
        [JsiiProperty(name: "aclId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AclId
        {
            get;
            set;
        }

        /// <summary>Property smartAgId: An intelligent gateway instance that needs to bind access control.</summary>
        [JsiiProperty(name: "smartAgId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SmartAgId
        {
            get;
            set;
        }
    }
}
