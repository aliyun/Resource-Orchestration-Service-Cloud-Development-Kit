using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gws
{
    /// <summary>A ROS template type:  `ALIYUN::GWS::Cluster`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Gws.RosCluster), fullyQualifiedName: "@alicloud/ros-cdk-gws.RosCluster", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-gws.RosClusterProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosCluster : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::GWS::Cluster`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosCluster(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Gws.IRosClusterProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosCluster(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosCluster(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Gws.RosCluster))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ClusterId: Cluster id
        /// </remarks>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Name: Cluster name
        /// </remarks>
        [JsiiProperty(name: "attrName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrName
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterType: Cluster Type:
        /// gws.s1.standard
        /// </remarks>
        [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ClusterType
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: VPC id
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string VpcId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: name: Cluster name
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Name
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: policy: Cluster policy
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-gws.RosCluster.PolicyProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Policy
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: VSwitch id
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? VSwitchId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IPolicyProperty), fullyQualifiedName: "@alicloud/ros-cdk-gws.RosCluster.PolicyProperty")]
        public interface IPolicyProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: clipboard: Clipboard
            /// </remarks>
            [JsiiProperty(name: "clipboard", typeJson: "{\"primitive\":\"string\"}")]
            string Clipboard
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: localDrive: Local drive
            /// </remarks>
            [JsiiProperty(name: "localDrive", typeJson: "{\"primitive\":\"string\"}")]
            string LocalDrive
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: usbRedirect: USB redirect
            /// </remarks>
            [JsiiProperty(name: "usbRedirect", typeJson: "{\"primitive\":\"string\"}")]
            string UsbRedirect
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: watermark: Watermark
            /// </remarks>
            [JsiiProperty(name: "watermark", typeJson: "{\"primitive\":\"string\"}")]
            string Watermark
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IPolicyProperty), fullyQualifiedName: "@alicloud/ros-cdk-gws.RosCluster.PolicyProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gws.RosCluster.IPolicyProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: clipboard: Clipboard
                /// </remarks>
                [JsiiProperty(name: "clipboard", typeJson: "{\"primitive\":\"string\"}")]
                public string Clipboard
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: localDrive: Local drive
                /// </remarks>
                [JsiiProperty(name: "localDrive", typeJson: "{\"primitive\":\"string\"}")]
                public string LocalDrive
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: usbRedirect: USB redirect
                /// </remarks>
                [JsiiProperty(name: "usbRedirect", typeJson: "{\"primitive\":\"string\"}")]
                public string UsbRedirect
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: watermark: Watermark
                /// </remarks>
                [JsiiProperty(name: "watermark", typeJson: "{\"primitive\":\"string\"}")]
                public string Watermark
                {
                    get => GetInstanceProperty<string>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-gws.RosCluster.PolicyProperty")]
        public class PolicyProperty : AlibabaCloud.SDK.ROS.CDK.Gws.RosCluster.IPolicyProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: clipboard: Clipboard
            /// </remarks>
            [JsiiProperty(name: "clipboard", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Clipboard
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: localDrive: Local drive
            /// </remarks>
            [JsiiProperty(name: "localDrive", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string LocalDrive
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: usbRedirect: USB redirect
            /// </remarks>
            [JsiiProperty(name: "usbRedirect", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string UsbRedirect
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: watermark: Watermark
            /// </remarks>
            [JsiiProperty(name: "watermark", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Watermark
            {
                get;
                set;
            }
        }
    }
}
