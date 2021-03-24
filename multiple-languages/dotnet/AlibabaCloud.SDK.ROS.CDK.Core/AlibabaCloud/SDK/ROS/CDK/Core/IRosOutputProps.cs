using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiInterface(nativeType: typeof(IRosOutputProps), fullyQualifiedName: "@alicloud/ros-cdk-core.RosOutputProps")]
    public interface IRosOutputProps
    {
        /// <summary>The value of the property returned by Resource Orchestration Service.</summary>
        /// <remarks>
        /// The value of an output can include literals, parameter references, pseudo-parameters,
        /// a mapping value, or intrinsic functions.
        /// </remarks>
        [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"any\"}")]
        object Value
        {
            get;
        }

        /// <summary>A condition to associate with this output value.</summary>
        /// <remarks>
        /// If the condition evaluates
        /// to <c>false</c>, this output value will not be included in the stack.
        /// 
        /// <strong>Default</strong>: - No condition is associated with the output.
        /// </remarks>
        [JsiiProperty(name: "condition", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.RosCondition\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.RosCondition? Condition
        {
            get
            {
                return null;
            }
        }

        /// <summary>A String type that describes the output value.</summary>
        /// <remarks>
        /// The description can be a maximum of 4 K in length.
        /// 
        /// <strong>Default</strong>: - No description.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>The name used to export the value of this output across stacks.</summary>
        /// <remarks>
        /// To import the value from another stack, use <c>Fn.importValue(exportName)</c>.
        /// 
        /// <strong>Default</strong>: - the output is not exported
        /// </remarks>
        [JsiiProperty(name: "exportName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ExportName
        {
            get
            {
                return null;
            }
        }

        [JsiiTypeProxy(nativeType: typeof(IRosOutputProps), fullyQualifiedName: "@alicloud/ros-cdk-core.RosOutputProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IRosOutputProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The value of the property returned by Resource Orchestration Service.</summary>
            /// <remarks>
            /// The value of an output can include literals, parameter references, pseudo-parameters,
            /// a mapping value, or intrinsic functions.
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"any\"}")]
            public object Value
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>A condition to associate with this output value.</summary>
            /// <remarks>
            /// If the condition evaluates
            /// to <c>false</c>, this output value will not be included in the stack.
            /// 
            /// <strong>Default</strong>: - No condition is associated with the output.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "condition", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.RosCondition\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.RosCondition? Condition
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.RosCondition?>();
            }

            /// <summary>A String type that describes the output value.</summary>
            /// <remarks>
            /// The description can be a maximum of 4 K in length.
            /// 
            /// <strong>Default</strong>: - No description.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>The name used to export the value of this output across stacks.</summary>
            /// <remarks>
            /// To import the value from another stack, use <c>Fn.importValue(exportName)</c>.
            /// 
            /// <strong>Default</strong>: - the output is not exported
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "exportName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ExportName
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
