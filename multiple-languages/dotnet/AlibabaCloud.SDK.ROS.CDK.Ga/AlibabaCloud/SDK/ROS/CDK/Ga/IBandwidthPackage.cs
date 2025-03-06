using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Represents a `BandwidthPackage`.</summary>
    [JsiiInterface(nativeType: typeof(IBandwidthPackage), fullyQualifiedName: "@alicloud/ros-cdk-ga.IBandwidthPackage")]
    public interface IBandwidthPackage : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AutoPay: The AutoPay of the bandwidth.</summary>
        [JsiiProperty(name: "attrAutoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoPay
        {
            get;
        }

        /// <summary>Attribute AutoUseCoupon: The AutoUseCoupon  of the bandwidth.</summary>
        [JsiiProperty(name: "attrAutoUseCoupon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoUseCoupon
        {
            get;
        }

        /// <summary>Attribute Bandwidth: The bandwidth provided by the bandwidth plan.</summary>
        [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBandwidth
        {
            get;
        }

        /// <summary>Attribute BandwidthPackageId: The Resource ID of the bandwidth.</summary>
        [JsiiProperty(name: "attrBandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBandwidthPackageId
        {
            get;
        }

        /// <summary>Attribute BandwidthPackageName: The Resource name of the bandwidth.</summary>
        [JsiiProperty(name: "attrBandwidthPackageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBandwidthPackageName
        {
            get;
        }

        /// <summary>Attribute BandwidthType: the bandwidth BandwidthType of the bandwidth.</summary>
        [JsiiProperty(name: "attrBandwidthType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBandwidthType
        {
            get;
        }

        /// <summary>Attribute BillingType: The BillingType of the bandwidth.</summary>
        [JsiiProperty(name: "attrBillingType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBillingType
        {
            get;
        }

        /// <summary>Attribute CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.</summary>
        [JsiiProperty(name: "attrCbnGeographicRegionIdA", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCbnGeographicRegionIdA
        {
            get;
        }

        /// <summary>Attribute CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.</summary>
        [JsiiProperty(name: "attrCbnGeographicRegionIdB", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCbnGeographicRegionIdB
        {
            get;
        }

        /// <summary>Attribute ChargeType: The ChargeType of the bandwidth.</summary>
        [JsiiProperty(name: "attrChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrChargeType
        {
            get;
        }

        /// <summary>Attribute PaymentType: The Payment Type of the bandwidth.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPaymentType
        {
            get;
        }

        /// <summary>Attribute Ratio: The Ratio of the bandwidth.</summary>
        [JsiiProperty(name: "attrRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRatio
        {
            get;
        }

        /// <summary>Attribute Type: The type of the bandwidth plan.</summary>
        [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ga.BandwidthPackageProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ga.IBandwidthPackageProps Props
        {
            get;
        }

        /// <summary>Represents a `BandwidthPackage`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBandwidthPackage), fullyQualifiedName: "@alicloud/ros-cdk-ga.IBandwidthPackage")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IBandwidthPackage
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AutoPay: The AutoPay of the bandwidth.</summary>
            [JsiiProperty(name: "attrAutoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoPay
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AutoUseCoupon: The AutoUseCoupon  of the bandwidth.</summary>
            [JsiiProperty(name: "attrAutoUseCoupon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoUseCoupon
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Bandwidth: The bandwidth provided by the bandwidth plan.</summary>
            [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BandwidthPackageId: The Resource ID of the bandwidth.</summary>
            [JsiiProperty(name: "attrBandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBandwidthPackageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BandwidthPackageName: The Resource name of the bandwidth.</summary>
            [JsiiProperty(name: "attrBandwidthPackageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBandwidthPackageName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BandwidthType: the bandwidth BandwidthType of the bandwidth.</summary>
            [JsiiProperty(name: "attrBandwidthType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBandwidthType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BillingType: The BillingType of the bandwidth.</summary>
            [JsiiProperty(name: "attrBillingType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBillingType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.</summary>
            [JsiiProperty(name: "attrCbnGeographicRegionIdA", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCbnGeographicRegionIdA
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.</summary>
            [JsiiProperty(name: "attrCbnGeographicRegionIdB", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCbnGeographicRegionIdB
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ChargeType: The ChargeType of the bandwidth.</summary>
            [JsiiProperty(name: "attrChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrChargeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PaymentType: The Payment Type of the bandwidth.</summary>
            [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Ratio: The Ratio of the bandwidth.</summary>
            [JsiiProperty(name: "attrRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRatio
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Type: The type of the bandwidth plan.</summary>
            [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ga.BandwidthPackageProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ga.IBandwidthPackageProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ga.IBandwidthPackageProps>()!;
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
