using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>A ROS template type:  `ALIYUN::VPC::CommonBandwidthPackage`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.RosCommonBandwidthPackage), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosCommonBandwidthPackage", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosCommonBandwidthPackage : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::VPC::CommonBandwidthPackage`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosCommonBandwidthPackage(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosCommonBandwidthPackageProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosCommonBandwidthPackage(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosCommonBandwidthPackage(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.RosCommonBandwidthPackage))!;

        /// <remarks>
        /// <strong>Attribute</strong>: BandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
        /// </remarks>
        [JsiiProperty(name: "attrBandwidthPackageId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrBandwidthPackageId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object Bandwidth
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the Internet Shared Bandwidth instance.
        /// The description must be 2 to 256 characters in length. It must start with a letter,
        /// and cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Description
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: internetChargeType: The billing model of the Internet Shared Bandwidth instance. Allowed values:
        /// PayByBandwidth (default): Billed by bandwidth.
        /// PayBy95: Charged at Enhanced 95.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InternetChargeType
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: isp: Line type of EIP, value: BGP (multi-line).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Isp
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the Internet Shared Bandwidth instance.
        /// The name must be 2 to 128 characters in length and can contain letters, numbers, periods
        /// (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot
        /// start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Name
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance. Default to 100.
        /// Note This parameter is only supported on the China site.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ratio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Ratio
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ResourceGroupId
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosCommonBandwidthPackage.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public virtual AlibabaCloud.SDK.ROS.CDK.Vpc.RosCommonBandwidthPackage.ITagsProperty[]? Tags
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.RosCommonBandwidthPackage.ITagsProperty[]?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: zone: Zone Id.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Zone
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(ITagsProperty), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosCommonBandwidthPackage.TagsProperty")]
        public interface ITagsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: undefined
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Key
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Value
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ITagsProperty), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosCommonBandwidthPackage.TagsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.RosCommonBandwidthPackage.ITagsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: key: undefined
                /// </remarks>
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Key
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: value: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Value
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosCommonBandwidthPackage.TagsProperty")]
        public class TagsProperty : AlibabaCloud.SDK.ROS.CDK.Vpc.RosCommonBandwidthPackage.ITagsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: undefined
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Key
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Value
            {
                get;
                set;
            }
        }
    }
}
