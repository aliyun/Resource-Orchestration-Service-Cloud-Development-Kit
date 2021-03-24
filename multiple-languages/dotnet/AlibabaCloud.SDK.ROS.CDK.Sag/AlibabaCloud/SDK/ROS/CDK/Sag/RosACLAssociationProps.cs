using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAG::ACLAssociation`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sag.RosACLAssociationProps")]
    public class RosACLAssociationProps : AlibabaCloud.SDK.ROS.CDK.Sag.IRosACLAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: aclId: Access control ID.
        /// </remarks>
        [JsiiProperty(name: "aclId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AclId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: smartAgId: An intelligent gateway instance that needs to bind access control.
        /// </remarks>
        [JsiiProperty(name: "smartAgId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SmartAgId
        {
            get;
            set;
        }
    }
}
