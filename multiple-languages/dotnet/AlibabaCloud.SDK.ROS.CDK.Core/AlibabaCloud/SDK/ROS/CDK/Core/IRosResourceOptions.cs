using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiInterface(nativeType: typeof(IRosResourceOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.IRosResourceOptions")]
    public interface IRosResourceOptions
    {
        /// <summary>A condition to associate with this resource.</summary>
        /// <remarks>
        /// This means that only if the condition evaluates to 'true' when the stack
        /// is deployed, the resource will be included. This is provided to allow CDK projects to produce legacy templates, but noramlly
        /// there is no need to use it in CDK projects.
        /// </remarks>
        [JsiiProperty(name: "condition", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.RosCondition\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.RosCondition? Condition
        {
            get
            {
                return null;
            }
            set
            {
                throw new System.NotSupportedException("'set' for 'Condition' is not implemented");
            }
        }

        [JsiiProperty(name: "count", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Count
        {
            get
            {
                return null;
            }
            set
            {
                throw new System.NotSupportedException("'set' for 'Count' is not implemented");
            }
        }

        /// <summary>With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.</summary>
        /// <remarks>
        /// You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
        /// attribute, ROS deletes the resource by default. Note that this capability also applies to update operations
        /// that lead to resources being removed.
        /// </remarks>
        [JsiiProperty(name: "deletionPolicy", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.RosDeletionPolicy\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.RosDeletionPolicy? DeletionPolicy
        {
            get
            {
                return null;
            }
            set
            {
                throw new System.NotSupportedException("'set' for 'DeletionPolicy' is not implemented");
            }
        }

        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
            set
            {
                throw new System.NotSupportedException("'set' for 'Description' is not implemented");
            }
        }

        /// <summary>Metadata associated with the ROS resource.</summary>
        /// <remarks>
        /// This is not the same as the construct metadata which can be added
        /// using construct.addMetadata(), but would not appear in the ROS template automatically.
        /// </remarks>
        [JsiiProperty(name: "metadata", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>? Metadata
        {
            get
            {
                return null;
            }
            set
            {
                throw new System.NotSupportedException("'set' for 'Metadata' is not implemented");
            }
        }

        [JsiiTypeProxy(nativeType: typeof(IRosResourceOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.IRosResourceOptions")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IRosResourceOptions
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>A condition to associate with this resource.</summary>
            /// <remarks>
            /// This means that only if the condition evaluates to 'true' when the stack
            /// is deployed, the resource will be included. This is provided to allow CDK projects to produce legacy templates, but noramlly
            /// there is no need to use it in CDK projects.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "condition", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.RosCondition\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.RosCondition? Condition
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.RosCondition?>();
                set => SetInstanceProperty(value);
            }

            [JsiiOptional]
            [JsiiProperty(name: "count", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Count
            {
                get => GetInstanceProperty<object?>();
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case double cast_cd4240:
                                break;
                            case byte cast_cd4240:
                                break;
                            case decimal cast_cd4240:
                                break;
                            case float cast_cd4240:
                                break;
                            case int cast_cd4240:
                                break;
                            case long cast_cd4240:
                                break;
                            case sbyte cast_cd4240:
                                break;
                            case short cast_cd4240:
                                break;
                            case uint cast_cd4240:
                                break;
                            case ulong cast_cd4240:
                                break;
                            case ushort cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    SetInstanceProperty(value);
                }
            }

            /// <summary>With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.</summary>
            /// <remarks>
            /// You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
            /// attribute, ROS deletes the resource by default. Note that this capability also applies to update operations
            /// that lead to resources being removed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionPolicy", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.RosDeletionPolicy\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.RosDeletionPolicy? DeletionPolicy
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.RosDeletionPolicy?>();
                set => SetInstanceProperty(value);
            }

            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
                set => SetInstanceProperty(value);
            }

            /// <summary>Metadata associated with the ROS resource.</summary>
            /// <remarks>
            /// This is not the same as the construct metadata which can be added
            /// using construct.addMetadata(), but would not appear in the ROS template automatically.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "metadata", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>? Metadata
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>?>();
                set => SetInstanceProperty(value);
            }
        }
    }
}
