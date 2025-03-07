using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Privatelink
{
    /// <summary>Represents a `VpcEndpointService`.</summary>
    [JsiiInterface(nativeType: typeof(IVpcEndpointService), fullyQualifiedName: "@alicloud/ros-cdk-privatelink.IVpcEndpointService")]
    public interface IVpcEndpointService : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Arn: The Alibaba Cloud Resource Name (ARN).</summary>
        [JsiiProperty(name: "attrArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrArn
        {
            get;
        }

        /// <summary>Attribute MaxBandwidth: The maximum bandwidth of the endpoint connection.</summary>
        [JsiiProperty(name: "attrMaxBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaxBandwidth
        {
            get;
        }

        /// <summary>Attribute MinBandwidth: The minimum bandwidth of the endpoint connection.</summary>
        [JsiiProperty(name: "attrMinBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMinBandwidth
        {
            get;
        }

        /// <summary>Attribute ServiceDescription: The description of the endpoint service.</summary>
        [JsiiProperty(name: "attrServiceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceDescription
        {
            get;
        }

        /// <summary>Attribute ServiceDomain: The domain name of the endpoint service.</summary>
        [JsiiProperty(name: "attrServiceDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceDomain
        {
            get;
        }

        /// <summary>Attribute ServiceId: The ID of the endpoint service.</summary>
        [JsiiProperty(name: "attrServiceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceId
        {
            get;
        }

        /// <summary>Attribute ServiceName: The name of the endpoint service.</summary>
        [JsiiProperty(name: "attrServiceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-privatelink.VpcEndpointServiceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Privatelink.IVpcEndpointServiceProps Props
        {
            get;
        }

        /// <summary>Represents a `VpcEndpointService`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVpcEndpointService), fullyQualifiedName: "@alicloud/ros-cdk-privatelink.IVpcEndpointService")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Privatelink.IVpcEndpointService
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Arn: The Alibaba Cloud Resource Name (ARN).</summary>
            [JsiiProperty(name: "attrArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrArn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaxBandwidth: The maximum bandwidth of the endpoint connection.</summary>
            [JsiiProperty(name: "attrMaxBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaxBandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MinBandwidth: The minimum bandwidth of the endpoint connection.</summary>
            [JsiiProperty(name: "attrMinBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMinBandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceDescription: The description of the endpoint service.</summary>
            [JsiiProperty(name: "attrServiceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceDomain: The domain name of the endpoint service.</summary>
            [JsiiProperty(name: "attrServiceDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceId: The ID of the endpoint service.</summary>
            [JsiiProperty(name: "attrServiceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceName: The name of the endpoint service.</summary>
            [JsiiProperty(name: "attrServiceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-privatelink.VpcEndpointServiceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Privatelink.IVpcEndpointServiceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Privatelink.IVpcEndpointServiceProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
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
