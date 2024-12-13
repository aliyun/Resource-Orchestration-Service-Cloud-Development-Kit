using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Paiplugin
{
    /// <summary>Properties for defining a `Group`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-group
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-paiplugin.GroupProps")]
    public interface IGroupProps
    {
        /// <summary>Property name: The name of the user group.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property source: Crowd source.</summary>
        /// <remarks>
        /// Valid values:
        /// 0: Enter phone numbers.
        /// 1: Single-column CSV File (Phone Numbers).
        /// 2: Multi-column CSV File.
        /// 3: MaxCompute Table.
        /// 4: Algorithm.
        /// </remarks>
        [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Source
        {
            get;
        }

        /// <summary>Property algorithm: Association algorithm.</summary>
        /// <remarks>
        /// This must be specified when Source is 4(Algorithm).
        /// </remarks>
        [JsiiProperty(name: "algorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Algorithm
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property column: Mobile phone number column name.</summary>
        /// <remarks>
        /// The Source is 2(Multi-column CSV File) or 3(MaxCompute Table) needs to be specified when it contains mobile phone numbers.
        /// </remarks>
        [JsiiProperty(name: "column", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Column
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property filter: Filter condition.</summary>
        /// <remarks>
        /// This condition can be specified when Source is 3(MaxCompute Table).
        /// </remarks>
        [JsiiProperty(name: "filter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Filter
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property inferenceJobId: Prediction task ID.This condition can be specified when Source is 4(Algorithm).</summary>
        [JsiiProperty(name: "inferenceJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InferenceJobId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property phoneNumber: Whether to include mobile phone numbers.</summary>
        /// <remarks>
        /// People with mobile phone numbers can be used for reach plans.
        /// </remarks>
        [JsiiProperty(name: "phoneNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PhoneNumber
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property project: MaxCompute (ODPS) project name.</summary>
        /// <remarks>
        /// This parameter must be specified when Source is 3(MaxCompute Table).
        /// </remarks>
        [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Project
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property remark: The notes of the user group.</summary>
        [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Remark
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property table: MaxCompute (ODPS) table name.</summary>
        /// <remarks>
        /// This parameter must be specified when Source is 3(MaxCompute Table).
        /// </remarks>
        [JsiiProperty(name: "table", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Table
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property text: The text of the phone number.</summary>
        /// <remarks>
        /// This must be specified when Source is 0(Enter phone numbers).
        /// </remarks>
        [JsiiProperty(name: "text", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Text
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property uri: File address.</summary>
        /// <remarks>
        /// It needs to be specified when Source is 1(Single-column CSV File) or 2(Multi-column CSV File).
        /// </remarks>
        [JsiiProperty(name: "uri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Uri
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Group`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-group
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-paiplugin.GroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Paiplugin.IGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property name: The name of the user group.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property source: Crowd source.</summary>
            /// <remarks>
            /// Valid values:
            /// 0: Enter phone numbers.
            /// 1: Single-column CSV File (Phone Numbers).
            /// 2: Multi-column CSV File.
            /// 3: MaxCompute Table.
            /// 4: Algorithm.
            /// </remarks>
            [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Source
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property algorithm: Association algorithm.</summary>
            /// <remarks>
            /// This must be specified when Source is 4(Algorithm).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "algorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Algorithm
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property column: Mobile phone number column name.</summary>
            /// <remarks>
            /// The Source is 2(Multi-column CSV File) or 3(MaxCompute Table) needs to be specified when it contains mobile phone numbers.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "column", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Column
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property filter: Filter condition.</summary>
            /// <remarks>
            /// This condition can be specified when Source is 3(MaxCompute Table).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "filter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Filter
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property inferenceJobId: Prediction task ID.This condition can be specified when Source is 4(Algorithm).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "inferenceJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InferenceJobId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property phoneNumber: Whether to include mobile phone numbers.</summary>
            /// <remarks>
            /// People with mobile phone numbers can be used for reach plans.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "phoneNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PhoneNumber
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property project: MaxCompute (ODPS) project name.</summary>
            /// <remarks>
            /// This parameter must be specified when Source is 3(MaxCompute Table).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Project
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property remark: The notes of the user group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Remark
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property table: MaxCompute (ODPS) table name.</summary>
            /// <remarks>
            /// This parameter must be specified when Source is 3(MaxCompute Table).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "table", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Table
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property text: The text of the phone number.</summary>
            /// <remarks>
            /// This must be specified when Source is 0(Enter phone numbers).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "text", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Text
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property uri: File address.</summary>
            /// <remarks>
            /// It needs to be specified when Source is 1(Single-column CSV File) or 2(Multi-column CSV File).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "uri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Uri
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
