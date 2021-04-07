using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::BgpGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosBgpGroupProps")]
    public class RosBgpGroupProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IRosBgpGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: peerAsn: The AS number of the BGP peer.
        /// </remarks>
        [JsiiProperty(name: "peerAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object PeerAsn
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: routerId: The ID of the VBR.
        /// </remarks>
        [JsiiProperty(name: "routerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object RouterId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: authKey: The authentication key of the BGP group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "authKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AuthKey
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the BGP group. The description must be 2 to 256 characters in length.
        /// It must start with a letter but cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: isFakeAsn: A router that runs BGP typically belongs to only one AS. In some cases, for example,
        /// the AS needs to be migrated or is merged with another AS, a new AS number replaces
        /// the original one.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "isFakeAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? IsFakeAsn
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: localAsn: The AS number on the Alibaba Cloud side.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "localAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? LocalAsn
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the BGP group. The name must be 2 to 128 characters in length and can
        /// contain digits, periods (.), underscores (_), and hyphens (-). The name must start
        /// with a letter but cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Name
        {
            get;
            set;
        }
    }
}
