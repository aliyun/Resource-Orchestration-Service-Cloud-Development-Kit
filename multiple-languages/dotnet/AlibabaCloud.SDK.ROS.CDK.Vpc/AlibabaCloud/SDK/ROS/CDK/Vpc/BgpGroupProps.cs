using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::BgpGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.BgpGroupProps")]
    public class BgpGroupProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IBgpGroupProps
    {
        /// <summary>Property peerAsn: The AS number of the BGP peer.</summary>
        [JsiiProperty(name: "peerAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object PeerAsn
        {
            get;
            set;
        }

        /// <summary>Property routerId: The ID of the VBR.</summary>
        [JsiiProperty(name: "routerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object RouterId
        {
            get;
            set;
        }

        /// <summary>Property authKey: The authentication key of the BGP group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "authKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AuthKey
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the BGP group.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length.
        /// It must start with a letter but cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property isFakeAsn: A router that runs BGP typically belongs to only one AS.</summary>
        /// <remarks>
        /// In some cases, for example,
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

        /// <summary>Property localAsn: The AS number on the Alibaba Cloud side.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "localAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? LocalAsn
        {
            get;
            set;
        }

        /// <summary>Property name: The name of the BGP group.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length and can
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
