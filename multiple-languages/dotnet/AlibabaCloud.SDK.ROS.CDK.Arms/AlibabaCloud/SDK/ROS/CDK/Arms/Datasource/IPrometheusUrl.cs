using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms.Datasource
{
    /// <summary>Represents a `PrometheusUrl`.</summary>
    [JsiiInterface(nativeType: typeof(IPrometheusUrl), fullyQualifiedName: "@alicloud/ros-cdk-arms.datasource.IPrometheusUrl")]
    public interface IPrometheusUrl : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ClusterId: Cluster ID.</summary>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterId
        {
            get;
        }

        /// <summary>Attribute ClusterType: Cluster type.</summary>
        [JsiiProperty(name: "attrClusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterType
        {
            get;
        }

        /// <summary>Attribute GrafanaUrl: Internal HTTP API URL (Grafana read URL).</summary>
        [JsiiProperty(name: "attrGrafanaUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGrafanaUrl
        {
            get;
        }

        /// <summary>Attribute InternetGrafanaUrl: Internet HTTP API URL (Grafana read URL).</summary>
        [JsiiProperty(name: "attrInternetGrafanaUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetGrafanaUrl
        {
            get;
        }

        /// <summary>Attribute InternetOpenTelemetryUrl: Internet OpenTelemetry URL.</summary>
        [JsiiProperty(name: "attrInternetOpenTelemetryUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetOpenTelemetryUrl
        {
            get;
        }

        /// <summary>Attribute InternetPushGatewayUrl: Internet push gateway URL.</summary>
        [JsiiProperty(name: "attrInternetPushGatewayUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetPushGatewayUrl
        {
            get;
        }

        /// <summary>Attribute InternetRemoteReadUrl: Internet remote read URL.</summary>
        [JsiiProperty(name: "attrInternetRemoteReadUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetRemoteReadUrl
        {
            get;
        }

        /// <summary>Attribute InternetRemoteWriteUrl: Internet remote write URL.</summary>
        [JsiiProperty(name: "attrInternetRemoteWriteUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetRemoteWriteUrl
        {
            get;
        }

        /// <summary>Attribute OpenTelemetryUrl: Internal OpenTelemetry URL.</summary>
        [JsiiProperty(name: "attrOpenTelemetryUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOpenTelemetryUrl
        {
            get;
        }

        /// <summary>Attribute PushGatewayUrl: Internal push gateway URL.</summary>
        [JsiiProperty(name: "attrPushGatewayUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPushGatewayUrl
        {
            get;
        }

        /// <summary>Attribute RemoteReadUrl: Internal remote read URL.</summary>
        [JsiiProperty(name: "attrRemoteReadUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRemoteReadUrl
        {
            get;
        }

        /// <summary>Attribute RemoteWriteUrl: Internal remote write URL.</summary>
        [JsiiProperty(name: "attrRemoteWriteUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRemoteWriteUrl
        {
            get;
        }

        /// <summary>Attribute Token: The token for Grafana read URL.</summary>
        [JsiiProperty(name: "attrToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrToken
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.datasource.PrometheusUrlProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IPrometheusUrlProps Props
        {
            get;
        }

        /// <summary>Represents a `PrometheusUrl`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPrometheusUrl), fullyQualifiedName: "@alicloud/ros-cdk-arms.datasource.IPrometheusUrl")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IPrometheusUrl
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ClusterId: Cluster ID.</summary>
            [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClusterType: Cluster type.</summary>
            [JsiiProperty(name: "attrClusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GrafanaUrl: Internal HTTP API URL (Grafana read URL).</summary>
            [JsiiProperty(name: "attrGrafanaUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGrafanaUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InternetGrafanaUrl: Internet HTTP API URL (Grafana read URL).</summary>
            [JsiiProperty(name: "attrInternetGrafanaUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetGrafanaUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InternetOpenTelemetryUrl: Internet OpenTelemetry URL.</summary>
            [JsiiProperty(name: "attrInternetOpenTelemetryUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetOpenTelemetryUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InternetPushGatewayUrl: Internet push gateway URL.</summary>
            [JsiiProperty(name: "attrInternetPushGatewayUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetPushGatewayUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InternetRemoteReadUrl: Internet remote read URL.</summary>
            [JsiiProperty(name: "attrInternetRemoteReadUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetRemoteReadUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InternetRemoteWriteUrl: Internet remote write URL.</summary>
            [JsiiProperty(name: "attrInternetRemoteWriteUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetRemoteWriteUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OpenTelemetryUrl: Internal OpenTelemetry URL.</summary>
            [JsiiProperty(name: "attrOpenTelemetryUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOpenTelemetryUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PushGatewayUrl: Internal push gateway URL.</summary>
            [JsiiProperty(name: "attrPushGatewayUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPushGatewayUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RemoteReadUrl: Internal remote read URL.</summary>
            [JsiiProperty(name: "attrRemoteReadUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRemoteReadUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RemoteWriteUrl: Internal remote write URL.</summary>
            [JsiiProperty(name: "attrRemoteWriteUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRemoteWriteUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Token: The token for Grafana read URL.</summary>
            [JsiiProperty(name: "attrToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrToken
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.datasource.PrometheusUrlProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IPrometheusUrlProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IPrometheusUrlProps>()!;
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
