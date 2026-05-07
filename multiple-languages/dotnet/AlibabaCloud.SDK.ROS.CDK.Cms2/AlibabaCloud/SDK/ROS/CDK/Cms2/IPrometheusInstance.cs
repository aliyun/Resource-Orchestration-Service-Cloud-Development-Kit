using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms2
{
    /// <summary>Represents a `PrometheusInstance`.</summary>
    [JsiiInterface(nativeType: typeof(IPrometheusInstance), fullyQualifiedName: "@alicloud/ros-cdk-cms2.IPrometheusInstance")]
    public interface IPrometheusInstance : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute HttpApiInterUrl: The HTTP API inter URL of the Prometheus instance.</summary>
        [JsiiProperty(name: "attrHttpApiInterUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHttpApiInterUrl
        {
            get;
        }

        /// <summary>Attribute HttpApiIntraUrl: The HTTP API intra URL of the Prometheus instance.</summary>
        [JsiiProperty(name: "attrHttpApiIntraUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHttpApiIntraUrl
        {
            get;
        }

        /// <summary>Attribute PrometheusInstanceId: The ID of the Prometheus instance.</summary>
        [JsiiProperty(name: "attrPrometheusInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrometheusInstanceId
        {
            get;
        }

        /// <summary>Attribute PushGatewayInterUrl: The push gateway inter URL of the Prometheus instance.</summary>
        [JsiiProperty(name: "attrPushGatewayInterUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPushGatewayInterUrl
        {
            get;
        }

        /// <summary>Attribute PushGatewayIntraUrl: The push gateway intra URL of the Prometheus instance.</summary>
        [JsiiProperty(name: "attrPushGatewayIntraUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPushGatewayIntraUrl
        {
            get;
        }

        /// <summary>Attribute RemoteReadInterUrl: The remote read inter URL of the Prometheus instance.</summary>
        [JsiiProperty(name: "attrRemoteReadInterUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRemoteReadInterUrl
        {
            get;
        }

        /// <summary>Attribute RemoteReadIntraUrl: The remote read intra URL of the Prometheus instance.</summary>
        [JsiiProperty(name: "attrRemoteReadIntraUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRemoteReadIntraUrl
        {
            get;
        }

        /// <summary>Attribute RemoteWriteInterUrl: The remote write inter URL of the Prometheus instance.</summary>
        [JsiiProperty(name: "attrRemoteWriteInterUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRemoteWriteInterUrl
        {
            get;
        }

        /// <summary>Attribute RemoteWriteIntraUrl: The remote write intra URL of the Prometheus instance.</summary>
        [JsiiProperty(name: "attrRemoteWriteIntraUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRemoteWriteIntraUrl
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms2.PrometheusInstanceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cms2.IPrometheusInstanceProps Props
        {
            get;
        }

        /// <summary>Represents a `PrometheusInstance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPrometheusInstance), fullyQualifiedName: "@alicloud/ros-cdk-cms2.IPrometheusInstance")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms2.IPrometheusInstance
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute HttpApiInterUrl: The HTTP API inter URL of the Prometheus instance.</summary>
            [JsiiProperty(name: "attrHttpApiInterUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHttpApiInterUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HttpApiIntraUrl: The HTTP API intra URL of the Prometheus instance.</summary>
            [JsiiProperty(name: "attrHttpApiIntraUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHttpApiIntraUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrometheusInstanceId: The ID of the Prometheus instance.</summary>
            [JsiiProperty(name: "attrPrometheusInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrometheusInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PushGatewayInterUrl: The push gateway inter URL of the Prometheus instance.</summary>
            [JsiiProperty(name: "attrPushGatewayInterUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPushGatewayInterUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PushGatewayIntraUrl: The push gateway intra URL of the Prometheus instance.</summary>
            [JsiiProperty(name: "attrPushGatewayIntraUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPushGatewayIntraUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RemoteReadInterUrl: The remote read inter URL of the Prometheus instance.</summary>
            [JsiiProperty(name: "attrRemoteReadInterUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRemoteReadInterUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RemoteReadIntraUrl: The remote read intra URL of the Prometheus instance.</summary>
            [JsiiProperty(name: "attrRemoteReadIntraUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRemoteReadIntraUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RemoteWriteInterUrl: The remote write inter URL of the Prometheus instance.</summary>
            [JsiiProperty(name: "attrRemoteWriteInterUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRemoteWriteInterUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RemoteWriteIntraUrl: The remote write intra URL of the Prometheus instance.</summary>
            [JsiiProperty(name: "attrRemoteWriteIntraUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRemoteWriteIntraUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms2.PrometheusInstanceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cms2.IPrometheusInstanceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cms2.IPrometheusInstanceProps>()!;
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
