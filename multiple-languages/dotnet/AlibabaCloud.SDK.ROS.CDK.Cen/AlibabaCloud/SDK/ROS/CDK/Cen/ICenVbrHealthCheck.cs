using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Represents a `CenVbrHealthCheck`.</summary>
    [JsiiInterface(nativeType: typeof(ICenVbrHealthCheck), fullyQualifiedName: "@alicloud/ros-cdk-cen.ICenVbrHealthCheck")]
    public interface ICenVbrHealthCheck : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CenId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "attrCenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCenId
        {
            get;
        }

        /// <summary>Attribute HealthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.</summary>
        /// <remarks>
        /// Default value: 2. Valid values: 2 to 3.  Unit: second.
        /// </remarks>
        [JsiiProperty(name: "attrHealthCheckInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckInterval
        {
            get;
        }

        /// <summary>Attribute HealthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.</summary>
        /// <remarks>
        /// Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
        /// </remarks>
        [JsiiProperty(name: "attrHealthCheckSourceIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckSourceIp
        {
            get;
        }

        /// <summary>Attribute HealthCheckTargetIp: Specifies the destination IP address of the health check.</summary>
        /// <remarks>
        /// The destination IP address is the IP address of the client-facing interface on the VBR instance.
        /// </remarks>
        [JsiiProperty(name: "attrHealthCheckTargetIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckTargetIp
        {
            get;
        }

        /// <summary>Attribute HealthyThreshold: Specifies the number of probe packets to be sent during the health check.</summary>
        /// <remarks>
        /// Default value: 8. Valid values: 3 to 8.  Unit: packet.
        /// </remarks>
        [JsiiProperty(name: "attrHealthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthyThreshold
        {
            get;
        }

        /// <summary>Attribute VbrInstanceId: The ID of the VBR instance.</summary>
        [JsiiProperty(name: "attrVbrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVbrInstanceId
        {
            get;
        }

        /// <summary>Attribute VbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.</summary>
        [JsiiProperty(name: "attrVbrInstanceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVbrInstanceOwnerId
        {
            get;
        }

        /// <summary>Attribute VbrInstanceRegionId: The ID of the region where the VBR instance is deployed.</summary>
        /// <remarks>
        /// You can call the DescribeRegionsoperation to query region IDs.
        /// </remarks>
        [JsiiProperty(name: "attrVbrInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVbrInstanceRegionId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.CenVbrHealthCheckProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cen.ICenVbrHealthCheckProps Props
        {
            get;
        }

        /// <summary>Represents a `CenVbrHealthCheck`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICenVbrHealthCheck), fullyQualifiedName: "@alicloud/ros-cdk-cen.ICenVbrHealthCheck")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ICenVbrHealthCheck
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CenId: The ID of the CEN instance.</summary>
            [JsiiProperty(name: "attrCenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.</summary>
            /// <remarks>
            /// Default value: 2. Valid values: 2 to 3.  Unit: second.
            /// </remarks>
            [JsiiProperty(name: "attrHealthCheckInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckInterval
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.</summary>
            /// <remarks>
            /// Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
            /// </remarks>
            [JsiiProperty(name: "attrHealthCheckSourceIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckSourceIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckTargetIp: Specifies the destination IP address of the health check.</summary>
            /// <remarks>
            /// The destination IP address is the IP address of the client-facing interface on the VBR instance.
            /// </remarks>
            [JsiiProperty(name: "attrHealthCheckTargetIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckTargetIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthyThreshold: Specifies the number of probe packets to be sent during the health check.</summary>
            /// <remarks>
            /// Default value: 8. Valid values: 3 to 8.  Unit: packet.
            /// </remarks>
            [JsiiProperty(name: "attrHealthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthyThreshold
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VbrInstanceId: The ID of the VBR instance.</summary>
            [JsiiProperty(name: "attrVbrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVbrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.</summary>
            [JsiiProperty(name: "attrVbrInstanceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVbrInstanceOwnerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VbrInstanceRegionId: The ID of the region where the VBR instance is deployed.</summary>
            /// <remarks>
            /// You can call the DescribeRegionsoperation to query region IDs.
            /// </remarks>
            [JsiiProperty(name: "attrVbrInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVbrInstanceRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.CenVbrHealthCheckProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cen.ICenVbrHealthCheckProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cen.ICenVbrHealthCheckProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
