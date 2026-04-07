using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `CustomCheckItem`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckitem
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICustomCheckItemProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.CustomCheckItemProps")]
    public interface ICustomCheckItemProps
    {
        /// <summary>Property checkRule: Check Item Check Rules.</summary>
        [JsiiProperty(name: "checkRule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object CheckRule
        {
            get;
        }

        /// <summary>Property checkShowName: Check item display name.</summary>
        [JsiiProperty(name: "checkShowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CheckShowName
        {
            get;
        }

        /// <summary>Property instanceSubType: Asset subtype to which the check item belongs.</summary>
        [JsiiProperty(name: "instanceSubType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceSubType
        {
            get;
        }

        /// <summary>Property instanceType: Asset type to which the check item belongs.</summary>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceType
        {
            get;
        }

        /// <summary>Property riskLevel: Risk level of inspection items.</summary>
        [JsiiProperty(name: "riskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RiskLevel
        {
            get;
        }

        /// <summary>Property sectionIds: CHECK SECTION OF INSPECTIONS.</summary>
        [JsiiProperty(name: "sectionIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object SectionIds
        {
            get;
        }

        /// <summary>Property status: Check item status.</summary>
        /// <remarks>
        /// Values:
        /// EDIT: Editing in progress
        /// RELEASE: Published
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Status
        {
            get;
        }

        /// <summary>Property vendor: Vendor to which the item belongs.</summary>
        [JsiiProperty(name: "vendor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Vendor
        {
            get;
        }

        /// <summary>Property assistInfo: Check Item Description Help Information.</summary>
        [JsiiProperty(name: "assistInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosCustomCheckItem.AssistInfoProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AssistInfo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Check item description information.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosCustomCheckItem.DescriptionProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property remark: Remarks.</summary>
        [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Remark
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property solution: Check Item Solution.</summary>
        [JsiiProperty(name: "solution", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosCustomCheckItem.SolutionProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Solution
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `CustomCheckItem`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckitem
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICustomCheckItemProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.CustomCheckItemProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.ICustomCheckItemProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property checkRule: Check Item Check Rules.</summary>
            [JsiiProperty(name: "checkRule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object CheckRule
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property checkShowName: Check item display name.</summary>
            [JsiiProperty(name: "checkShowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CheckShowName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceSubType: Asset subtype to which the check item belongs.</summary>
            [JsiiProperty(name: "instanceSubType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceSubType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceType: Asset type to which the check item belongs.</summary>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property riskLevel: Risk level of inspection items.</summary>
            [JsiiProperty(name: "riskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RiskLevel
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sectionIds: CHECK SECTION OF INSPECTIONS.</summary>
            [JsiiProperty(name: "sectionIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object SectionIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property status: Check item status.</summary>
            /// <remarks>
            /// Values:
            /// EDIT: Editing in progress
            /// RELEASE: Published
            /// </remarks>
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Status
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vendor: Vendor to which the item belongs.</summary>
            [JsiiProperty(name: "vendor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Vendor
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property assistInfo: Check Item Description Help Information.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "assistInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosCustomCheckItem.AssistInfoProperty\"}]}}", isOptional: true)]
            public object? AssistInfo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Check item description information.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosCustomCheckItem.DescriptionProperty\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property remark: Remarks.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Remark
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property solution: Check Item Solution.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "solution", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosCustomCheckItem.SolutionProperty\"}]}}", isOptional: true)]
            public object? Solution
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
