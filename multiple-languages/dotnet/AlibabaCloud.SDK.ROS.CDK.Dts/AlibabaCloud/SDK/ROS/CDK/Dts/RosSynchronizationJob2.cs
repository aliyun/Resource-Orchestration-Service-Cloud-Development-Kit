using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>This class is a base encapsulation around the ROS resource type `ALIYUN::DTS::SynchronizationJob2`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class does not contain additional functions, so it is recommended to use the `SynchronizationJob2` class instead of this class for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-synchronizationjob2
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob2), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob2", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob2Props\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosSynchronizationJob2 : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosSynchronizationJob2(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Dts.IRosSynchronizationJob2Props props, bool enableResourcePropertyConstraint): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Dts.IRosSynchronizationJob2Props props, bool enableResourcePropertyConstraint)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosSynchronizationJob2(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosSynchronizationJob2(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob2))!;

        /// <remarks>
        /// <strong>Attribute</strong>: DtsInstanceId: The ID of the DTS instance.
        /// </remarks>
        [JsiiProperty(name: "attrDtsInstanceId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDtsInstanceId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: DtsJobId: The ID of the task.
        /// </remarks>
        [JsiiProperty(name: "attrDtsJobId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDtsJobId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: DtsJobName: The name of the DTS job.
        /// </remarks>
        [JsiiProperty(name: "attrDtsJobName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDtsJobName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: dataInitialization: Specifies whether to perform full data migration or full data synchronization. Default value: **true**. Valid values: **true** and **false**.
        /// </remarks>
        [JsiiProperty(name: "dataInitialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object DataInitialization
        {
            get => GetInstanceProperty<object>()!;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization. Default value: **false**. Valid values: **true** and **false**.
        /// </remarks>
        [JsiiProperty(name: "dataSynchronization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object DataSynchronization
        {
            get => GetInstanceProperty<object>()!;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dbList: The objects that you want to migrate or synchronize.
        /// </remarks>
        [JsiiProperty(name: "dbList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        public virtual object DbList
        {
            get => GetInstanceProperty<object>()!;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case System.Collections.Generic.IDictionary<string, object> cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, System.Collections.Generic.IDictionary<string, object>; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, System.Collections.Generic.IDictionary<string, object>; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpoint: Destination instance configuration.
        /// </remarks>
        [JsiiProperty(name: "destinationEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob2.DestinationEndpointProperty\"}]}}")]
        public virtual object DestinationEndpoint
        {
            get => GetInstanceProperty<object>()!;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob2.IDestinationEndpointProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob2.IDestinationEndpointProperty).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob2.IDestinationEndpointProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dtsJobName: The name of the DTS instance.
        /// </remarks>
        [JsiiProperty(name: "dtsJobName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object DtsJobName
        {
            get => GetInstanceProperty<object>()!;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceEndpoint: Source instance configuration.
        /// </remarks>
        [JsiiProperty(name: "sourceEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob2.SourceEndpointProperty\"}]}}")]
        public virtual object SourceEndpoint
        {
            get => GetInstanceProperty<object>()!;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob2.ISourceEndpointProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob2.ISourceEndpointProperty).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob2.ISourceEndpointProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: structureInitialization: Specifies whether to perform schema migration or schema synchronization. Default value: true. Valid values: **true** and **false**.
        /// </remarks>
        [JsiiProperty(name: "structureInitialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object StructureInitialization
        {
            get => GetInstanceProperty<object>()!;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "checkpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Checkpoint
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dataCheckConfigure: The data verification task for a data migration or synchronization instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dataCheckConfigure", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob2.DataCheckConfigureProperty\"}]}}", isOptional: true)]
        public virtual object? DataCheckConfigure
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob2.IDataCheckConfigureProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob2.IDataCheckConfigureProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dedicatedClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DedicatedClusterId
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "delayNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DelayNotice
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
        /// **Note**: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "delayPhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DelayPhone
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "delayRuleTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DelayRuleTime
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

        /// <remarks>
        /// <strong>Property</strong>: destPrimaryVswId: The primary VSW ID at the destination end of the VPC NAT.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destPrimaryVswId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DestPrimaryVswId
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: destSecondaryVswId: The secondary VSW ID at the destination end of the VPC NAT.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destSecondaryVswId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DestSecondaryVswId
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance. Valid values: **true** and **false**
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "disasterRecoveryJob", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DisasterRecoveryJob
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dtsBisLabel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DtsBisLabel
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dtsInstanceId: The ID of the DTS instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dtsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DtsInstanceId
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dtsJobId: The ID of the DTS task.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dtsJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DtsJobId
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "errorNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ErrorNotice
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
        /// **Note**: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "errorPhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ErrorPhone
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "fileOssUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? FileOssUrl
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: maxDu: The upper limit of DU. This parameter is supported only for serverless instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maxDu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? MaxDu
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

        /// <remarks>
        /// <strong>Property</strong>: minDu: The lower limit of DU. This parameter is supported only for serverless instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "minDu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? MinDu
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

        /// <remarks>
        /// <strong>Property</strong>: reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "reserve", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        public virtual object? Reserve
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case System.Collections.Generic.IDictionary<string, object> cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, System.Collections.Generic.IDictionary<string, object>; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ResourceGroupId
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: srcPrimaryVswId: The primary VSW ID at the source end of the VPC NAT.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "srcPrimaryVswId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SrcPrimaryVswId
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: srcSecondaryVswId: The secondary VSW ID at the source end of the VPC NAT.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "srcSecondaryVswId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SrcSecondaryVswId
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: status: The status of the resource. Valid values:
        /// - **Synchronizing**: Start the task.
        /// - **Suspending**: Suspend the task.
        /// - **Stopping**: Stop the task.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Status
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: synchronizationDirection: The synchronization direction. Default value: Forward. Valid values:
        /// - **Forward**: Data is synchronized from the source database to the destination database.
        /// - **Reverse**: Data is synchronized from the destination database to the source database.
        /// **Note**: The default value is **Forward**.
        /// The value Reverse takes effect only if the topology of the data synchronization task is two-way synchronization.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "synchronizationDirection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SynchronizationDirection
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }
        [JsiiInterface(nativeType: typeof(IDataCheckConfigureProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob2.DataCheckConfigureProperty")]
        public interface IDataCheckConfigureProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: checkMaximumHour: The timeout period of the full data verification task. Valid values: integers from 1 to 72. Countdown begins the moment the full data verification task is started. If the task is not complete within the specified timeout period, the task is forcibly stopped.
            /// </remarks>
            [JsiiProperty(name: "checkMaximumHour", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CheckMaximumHour
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: checkMaximumHourEnable: Specifies whether to configure a timeout period for the full data verification task.Valid values:
            /// - **0**: does not configure a timeout period for the full data verification task.
            /// - **1**: configures a timeout period for the full data verification task.
            /// **Note**: This parameter is required if the fullCheckModel parameter is set to 1.
            /// </remarks>
            [JsiiProperty(name: "checkMaximumHourEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CheckMaximumHourEnable
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: dataCheckDbList: The objects whose data is to be verified. The value must be a JSON string.
            /// </remarks>
            [JsiiProperty(name: "dataCheckDbList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DataCheckDbList
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: dataCheckNoticePhone: The mobile number of the alert contact for a full or incremental data verification task. If an alert is triggered for a verification task, a text message is sent to notify the alert contact.
            /// </remarks>
            [JsiiProperty(name: "dataCheckNoticePhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DataCheckNoticePhone
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: fullCheckErrorNotice: Specifies whether to trigger an alert if the full data verification task fails. Valid values: **true** and **false**.
            /// **Note**: For example, you set this parameter to **true**. If the full data verification task fails, an alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "fullCheckErrorNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? FullCheckErrorNotice
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: fullCheckFixData: Specifies whether to replace the inconsistent data. Valid values: **true** and **false**. Default value: false.
            /// **Note**: For example, you set this parameter to true. If the destination database has data that is inconsistent with the data in the source database, the data values of the destination database are replaced with those of the source database.
            /// </remarks>
            [JsiiProperty(name: "fullCheckFixData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? FullCheckFixData
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: fullCheckMaxReadBps: The maximum number of bytes that are read per second. Valid values: integers from 0 to 9007199254740991.
            /// </remarks>
            [JsiiProperty(name: "fullCheckMaxReadBps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? FullCheckMaxReadBps
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: fullCheckMaxReadRps: The maximum number of data rows that are read per second. Valid values: integers from 0 to 9007199254740991.
            /// </remarks>
            [JsiiProperty(name: "fullCheckMaxReadRps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? FullCheckMaxReadRps
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: fullCheckModel: The mode of the full data verification task. Valid values:
            /// - **1**: verifies the data by sampling ratio.
            /// - **2**: verifies the data by row.
            /// </remarks>
            [JsiiProperty(name: "fullCheckModel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? FullCheckModel
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: fullCheckNoticeValue: The alert threshold for inconsistent data entries detected by the full data verification task.
            /// **Note**: This parameter is required if the **fullCheckValidFailNotice** parameter is set to **true**.
            /// </remarks>
            [JsiiProperty(name: "fullCheckNoticeValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? FullCheckNoticeValue
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: fullCheckRatio: The sampling ratio of the full data verification task. Valid values: integers from 10 to 100. Unit: percent.
            /// **Note**: This parameter is required if the **fullCheckModel** parameter is set to 1.
            /// </remarks>
            [JsiiProperty(name: "fullCheckRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? FullCheckRatio
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: fullCheckReferEndpoint: The benchmark for full data verification. Valid values:
            /// - **all**: checks the data consistency between the source and destination databases based on the source and destination databases.
            /// - **src**: checks the data consistency between the source and destination databases based on the source database. Objects that exist in the destination database but do not exist in the source database are not checked.
            /// - **dest**: checks the data consistency between the source and destination databases based on the destination database. Objects that exist in the source database but do not exist in the destination database are not checked.
            /// </remarks>
            [JsiiProperty(name: "fullCheckReferEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? FullCheckReferEndpoint
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: fullCheckValidFailNotice: Specifies whether to trigger an alert if inconsistent data is detected by the full data verification task. Valid values: **true** and **false**.
            /// **Note**: For example, you set this parameter to true. If the number of inconsistent data entries detected by the full data verification task is greater than or equal to the threshold that you specified, an alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "fullCheckValidFailNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? FullCheckValidFailNotice
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: fullDataCheck: Specifies whether to perform a full data verification task. Valid values: **true** and **false**.
            /// </remarks>
            [JsiiProperty(name: "fullDataCheck", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? FullDataCheck
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: incrementalCheckDelayNotice: Specifies whether to trigger an alert on the data latency of the incremental data verification task. Valid values: **true** and **false**.
            /// **Note**: For example, you set this parameter to **true**. If the cumulative latency of the incremental data verification task in several statistical periods is greater than or equal to the threshold that you specified, an alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "incrementalCheckDelayNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IncrementalCheckDelayNotice
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: incrementalCheckDelayNoticePeriod: The statistical period of an alert on the data latency of the incremental data verification task. Valid values:
            /// - **1**: 1 minute
            /// - **2**: 5 minutes
            /// - **3**: 10 minutes
            /// - **4**: 30 minutes
            /// **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
            /// </remarks>
            [JsiiProperty(name: "incrementalCheckDelayNoticePeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IncrementalCheckDelayNoticePeriod
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: incrementalCheckDelayNoticeTimes: The number of statistical periods of an alert on the data latency of the incremental data verification task.
            /// **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
            /// </remarks>
            [JsiiProperty(name: "incrementalCheckDelayNoticeTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IncrementalCheckDelayNoticeTimes
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: incrementalCheckDelayNoticeValue: The alert threshold for the data latency of the incremental data verification task. Unit: seconds.
            /// **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
            /// </remarks>
            [JsiiProperty(name: "incrementalCheckDelayNoticeValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IncrementalCheckDelayNoticeValue
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: incrementalCheckErrorNotice: Specifies whether to trigger an alert if the incremental data verification task fails. Valid values: **true** and **false**.
            /// Note: For example, you set this parameter to **true**. If the incremental data verification task fails, an alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "incrementalCheckErrorNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IncrementalCheckErrorNotice
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: incrementalCheckValidFailNotice: Specifies whether to trigger an alert if inconsistent data is detected by the incremental data verification task. Valid values: **true** and **false**.
            /// **Note**: For example, you set this parameter to **true**. If the cumulative number of inconsistent data entries detected by the incremental data verification task in several statistical periods is greater than or equal to the threshold that you specified, an alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "incrementalCheckValidFailNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IncrementalCheckValidFailNotice
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: incrementalCheckValidFailNoticePeriod: The statistical period of an alert on inconsistent data entries detected by the incremental data verification task. Valid values:
            /// - **1**: 1 minute
            /// - **2**: 5 minutes
            /// - **3**: 10 minutes
            /// - **4**: 30 minutes
            /// **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
            /// </remarks>
            [JsiiProperty(name: "incrementalCheckValidFailNoticePeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IncrementalCheckValidFailNoticePeriod
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: incrementalCheckValidFailNoticeTimes: The number of statistical periods of an alert on inconsistent data entries detected by the incremental data verification task.
            /// **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
            /// </remarks>
            [JsiiProperty(name: "incrementalCheckValidFailNoticeTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IncrementalCheckValidFailNoticeTimes
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: incrementalCheckValidFailNoticeValue: The alert threshold for inconsistent data entries detected by the incremental data verification task.
            /// **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
            /// </remarks>
            [JsiiProperty(name: "incrementalCheckValidFailNoticeValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IncrementalCheckValidFailNoticeValue
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: incrementalDataCheck: Specifies whether to perform an incremental data verification task. Valid values: **true** and **false**.
            /// </remarks>
            [JsiiProperty(name: "incrementalDataCheck", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IncrementalDataCheck
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IDataCheckConfigureProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob2.DataCheckConfigureProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob2.IDataCheckConfigureProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: checkMaximumHour: The timeout period of the full data verification task. Valid values: integers from 1 to 72. Countdown begins the moment the full data verification task is started. If the task is not complete within the specified timeout period, the task is forcibly stopped.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "checkMaximumHour", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CheckMaximumHour
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: checkMaximumHourEnable: Specifies whether to configure a timeout period for the full data verification task.Valid values:
                /// - **0**: does not configure a timeout period for the full data verification task.
                /// - **1**: configures a timeout period for the full data verification task.
                /// **Note**: This parameter is required if the fullCheckModel parameter is set to 1.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "checkMaximumHourEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CheckMaximumHourEnable
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: dataCheckDbList: The objects whose data is to be verified. The value must be a JSON string.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "dataCheckDbList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DataCheckDbList
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: dataCheckNoticePhone: The mobile number of the alert contact for a full or incremental data verification task. If an alert is triggered for a verification task, a text message is sent to notify the alert contact.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "dataCheckNoticePhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DataCheckNoticePhone
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: fullCheckErrorNotice: Specifies whether to trigger an alert if the full data verification task fails. Valid values: **true** and **false**.
                /// **Note**: For example, you set this parameter to **true**. If the full data verification task fails, an alert is triggered.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "fullCheckErrorNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? FullCheckErrorNotice
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: fullCheckFixData: Specifies whether to replace the inconsistent data. Valid values: **true** and **false**. Default value: false.
                /// **Note**: For example, you set this parameter to true. If the destination database has data that is inconsistent with the data in the source database, the data values of the destination database are replaced with those of the source database.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "fullCheckFixData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? FullCheckFixData
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: fullCheckMaxReadBps: The maximum number of bytes that are read per second. Valid values: integers from 0 to 9007199254740991.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "fullCheckMaxReadBps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? FullCheckMaxReadBps
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: fullCheckMaxReadRps: The maximum number of data rows that are read per second. Valid values: integers from 0 to 9007199254740991.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "fullCheckMaxReadRps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? FullCheckMaxReadRps
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: fullCheckModel: The mode of the full data verification task. Valid values:
                /// - **1**: verifies the data by sampling ratio.
                /// - **2**: verifies the data by row.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "fullCheckModel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? FullCheckModel
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: fullCheckNoticeValue: The alert threshold for inconsistent data entries detected by the full data verification task.
                /// **Note**: This parameter is required if the **fullCheckValidFailNotice** parameter is set to **true**.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "fullCheckNoticeValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? FullCheckNoticeValue
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: fullCheckRatio: The sampling ratio of the full data verification task. Valid values: integers from 10 to 100. Unit: percent.
                /// **Note**: This parameter is required if the **fullCheckModel** parameter is set to 1.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "fullCheckRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? FullCheckRatio
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: fullCheckReferEndpoint: The benchmark for full data verification. Valid values:
                /// - **all**: checks the data consistency between the source and destination databases based on the source and destination databases.
                /// - **src**: checks the data consistency between the source and destination databases based on the source database. Objects that exist in the destination database but do not exist in the source database are not checked.
                /// - **dest**: checks the data consistency between the source and destination databases based on the destination database. Objects that exist in the source database but do not exist in the destination database are not checked.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "fullCheckReferEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? FullCheckReferEndpoint
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: fullCheckValidFailNotice: Specifies whether to trigger an alert if inconsistent data is detected by the full data verification task. Valid values: **true** and **false**.
                /// **Note**: For example, you set this parameter to true. If the number of inconsistent data entries detected by the full data verification task is greater than or equal to the threshold that you specified, an alert is triggered.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "fullCheckValidFailNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? FullCheckValidFailNotice
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: fullDataCheck: Specifies whether to perform a full data verification task. Valid values: **true** and **false**.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "fullDataCheck", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? FullDataCheck
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: incrementalCheckDelayNotice: Specifies whether to trigger an alert on the data latency of the incremental data verification task. Valid values: **true** and **false**.
                /// **Note**: For example, you set this parameter to **true**. If the cumulative latency of the incremental data verification task in several statistical periods is greater than or equal to the threshold that you specified, an alert is triggered.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "incrementalCheckDelayNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IncrementalCheckDelayNotice
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: incrementalCheckDelayNoticePeriod: The statistical period of an alert on the data latency of the incremental data verification task. Valid values:
                /// - **1**: 1 minute
                /// - **2**: 5 minutes
                /// - **3**: 10 minutes
                /// - **4**: 30 minutes
                /// **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "incrementalCheckDelayNoticePeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IncrementalCheckDelayNoticePeriod
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: incrementalCheckDelayNoticeTimes: The number of statistical periods of an alert on the data latency of the incremental data verification task.
                /// **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "incrementalCheckDelayNoticeTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IncrementalCheckDelayNoticeTimes
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: incrementalCheckDelayNoticeValue: The alert threshold for the data latency of the incremental data verification task. Unit: seconds.
                /// **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "incrementalCheckDelayNoticeValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IncrementalCheckDelayNoticeValue
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: incrementalCheckErrorNotice: Specifies whether to trigger an alert if the incremental data verification task fails. Valid values: **true** and **false**.
                /// Note: For example, you set this parameter to **true**. If the incremental data verification task fails, an alert is triggered.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "incrementalCheckErrorNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IncrementalCheckErrorNotice
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: incrementalCheckValidFailNotice: Specifies whether to trigger an alert if inconsistent data is detected by the incremental data verification task. Valid values: **true** and **false**.
                /// **Note**: For example, you set this parameter to **true**. If the cumulative number of inconsistent data entries detected by the incremental data verification task in several statistical periods is greater than or equal to the threshold that you specified, an alert is triggered.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "incrementalCheckValidFailNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IncrementalCheckValidFailNotice
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: incrementalCheckValidFailNoticePeriod: The statistical period of an alert on inconsistent data entries detected by the incremental data verification task. Valid values:
                /// - **1**: 1 minute
                /// - **2**: 5 minutes
                /// - **3**: 10 minutes
                /// - **4**: 30 minutes
                /// **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "incrementalCheckValidFailNoticePeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IncrementalCheckValidFailNoticePeriod
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: incrementalCheckValidFailNoticeTimes: The number of statistical periods of an alert on inconsistent data entries detected by the incremental data verification task.
                /// **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "incrementalCheckValidFailNoticeTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IncrementalCheckValidFailNoticeTimes
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: incrementalCheckValidFailNoticeValue: The alert threshold for inconsistent data entries detected by the incremental data verification task.
                /// **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "incrementalCheckValidFailNoticeValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IncrementalCheckValidFailNoticeValue
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: incrementalDataCheck: Specifies whether to perform an incremental data verification task. Valid values: **true** and **false**.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "incrementalDataCheck", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IncrementalDataCheck
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosSynchronizationJob2.DataCheckConfigureProperty")]
        public class DataCheckConfigureProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob2.IDataCheckConfigureProperty
        {
            private object? _checkMaximumHour;

            /// <remarks>
            /// <strong>Property</strong>: checkMaximumHour: The timeout period of the full data verification task. Valid values: integers from 1 to 72. Countdown begins the moment the full data verification task is started. If the task is not complete within the specified timeout period, the task is forcibly stopped.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "checkMaximumHour", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CheckMaximumHour
            {
                get => _checkMaximumHour;
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
                    _checkMaximumHour = value;
                }
            }

            private object? _checkMaximumHourEnable;

            /// <remarks>
            /// <strong>Property</strong>: checkMaximumHourEnable: Specifies whether to configure a timeout period for the full data verification task.Valid values:
            /// - **0**: does not configure a timeout period for the full data verification task.
            /// - **1**: configures a timeout period for the full data verification task.
            /// **Note**: This parameter is required if the fullCheckModel parameter is set to 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "checkMaximumHourEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CheckMaximumHourEnable
            {
                get => _checkMaximumHourEnable;
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
                    _checkMaximumHourEnable = value;
                }
            }

            private object? _dataCheckDbList;

            /// <remarks>
            /// <strong>Property</strong>: dataCheckDbList: The objects whose data is to be verified. The value must be a JSON string.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataCheckDbList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataCheckDbList
            {
                get => _dataCheckDbList;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _dataCheckDbList = value;
                }
            }

            private object? _dataCheckNoticePhone;

            /// <remarks>
            /// <strong>Property</strong>: dataCheckNoticePhone: The mobile number of the alert contact for a full or incremental data verification task. If an alert is triggered for a verification task, a text message is sent to notify the alert contact.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataCheckNoticePhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataCheckNoticePhone
            {
                get => _dataCheckNoticePhone;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _dataCheckNoticePhone = value;
                }
            }

            private object? _fullCheckErrorNotice;

            /// <remarks>
            /// <strong>Property</strong>: fullCheckErrorNotice: Specifies whether to trigger an alert if the full data verification task fails. Valid values: **true** and **false**.
            /// **Note**: For example, you set this parameter to **true**. If the full data verification task fails, an alert is triggered.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fullCheckErrorNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FullCheckErrorNotice
            {
                get => _fullCheckErrorNotice;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _fullCheckErrorNotice = value;
                }
            }

            private object? _fullCheckFixData;

            /// <remarks>
            /// <strong>Property</strong>: fullCheckFixData: Specifies whether to replace the inconsistent data. Valid values: **true** and **false**. Default value: false.
            /// **Note**: For example, you set this parameter to true. If the destination database has data that is inconsistent with the data in the source database, the data values of the destination database are replaced with those of the source database.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fullCheckFixData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FullCheckFixData
            {
                get => _fullCheckFixData;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _fullCheckFixData = value;
                }
            }

            private object? _fullCheckMaxReadBps;

            /// <remarks>
            /// <strong>Property</strong>: fullCheckMaxReadBps: The maximum number of bytes that are read per second. Valid values: integers from 0 to 9007199254740991.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fullCheckMaxReadBps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FullCheckMaxReadBps
            {
                get => _fullCheckMaxReadBps;
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
                    _fullCheckMaxReadBps = value;
                }
            }

            private object? _fullCheckMaxReadRps;

            /// <remarks>
            /// <strong>Property</strong>: fullCheckMaxReadRps: The maximum number of data rows that are read per second. Valid values: integers from 0 to 9007199254740991.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fullCheckMaxReadRps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FullCheckMaxReadRps
            {
                get => _fullCheckMaxReadRps;
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
                    _fullCheckMaxReadRps = value;
                }
            }

            private object? _fullCheckModel;

            /// <remarks>
            /// <strong>Property</strong>: fullCheckModel: The mode of the full data verification task. Valid values:
            /// - **1**: verifies the data by sampling ratio.
            /// - **2**: verifies the data by row.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fullCheckModel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FullCheckModel
            {
                get => _fullCheckModel;
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
                    _fullCheckModel = value;
                }
            }

            private object? _fullCheckNoticeValue;

            /// <remarks>
            /// <strong>Property</strong>: fullCheckNoticeValue: The alert threshold for inconsistent data entries detected by the full data verification task.
            /// **Note**: This parameter is required if the **fullCheckValidFailNotice** parameter is set to **true**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fullCheckNoticeValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FullCheckNoticeValue
            {
                get => _fullCheckNoticeValue;
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
                    _fullCheckNoticeValue = value;
                }
            }

            private object? _fullCheckRatio;

            /// <remarks>
            /// <strong>Property</strong>: fullCheckRatio: The sampling ratio of the full data verification task. Valid values: integers from 10 to 100. Unit: percent.
            /// **Note**: This parameter is required if the **fullCheckModel** parameter is set to 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fullCheckRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FullCheckRatio
            {
                get => _fullCheckRatio;
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
                    _fullCheckRatio = value;
                }
            }

            private object? _fullCheckReferEndpoint;

            /// <remarks>
            /// <strong>Property</strong>: fullCheckReferEndpoint: The benchmark for full data verification. Valid values:
            /// - **all**: checks the data consistency between the source and destination databases based on the source and destination databases.
            /// - **src**: checks the data consistency between the source and destination databases based on the source database. Objects that exist in the destination database but do not exist in the source database are not checked.
            /// - **dest**: checks the data consistency between the source and destination databases based on the destination database. Objects that exist in the source database but do not exist in the destination database are not checked.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fullCheckReferEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FullCheckReferEndpoint
            {
                get => _fullCheckReferEndpoint;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _fullCheckReferEndpoint = value;
                }
            }

            private object? _fullCheckValidFailNotice;

            /// <remarks>
            /// <strong>Property</strong>: fullCheckValidFailNotice: Specifies whether to trigger an alert if inconsistent data is detected by the full data verification task. Valid values: **true** and **false**.
            /// **Note**: For example, you set this parameter to true. If the number of inconsistent data entries detected by the full data verification task is greater than or equal to the threshold that you specified, an alert is triggered.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fullCheckValidFailNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FullCheckValidFailNotice
            {
                get => _fullCheckValidFailNotice;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _fullCheckValidFailNotice = value;
                }
            }

            private object? _fullDataCheck;

            /// <remarks>
            /// <strong>Property</strong>: fullDataCheck: Specifies whether to perform a full data verification task. Valid values: **true** and **false**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fullDataCheck", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FullDataCheck
            {
                get => _fullDataCheck;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _fullDataCheck = value;
                }
            }

            private object? _incrementalCheckDelayNotice;

            /// <remarks>
            /// <strong>Property</strong>: incrementalCheckDelayNotice: Specifies whether to trigger an alert on the data latency of the incremental data verification task. Valid values: **true** and **false**.
            /// **Note**: For example, you set this parameter to **true**. If the cumulative latency of the incremental data verification task in several statistical periods is greater than or equal to the threshold that you specified, an alert is triggered.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "incrementalCheckDelayNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncrementalCheckDelayNotice
            {
                get => _incrementalCheckDelayNotice;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _incrementalCheckDelayNotice = value;
                }
            }

            private object? _incrementalCheckDelayNoticePeriod;

            /// <remarks>
            /// <strong>Property</strong>: incrementalCheckDelayNoticePeriod: The statistical period of an alert on the data latency of the incremental data verification task. Valid values:
            /// - **1**: 1 minute
            /// - **2**: 5 minutes
            /// - **3**: 10 minutes
            /// - **4**: 30 minutes
            /// **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "incrementalCheckDelayNoticePeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncrementalCheckDelayNoticePeriod
            {
                get => _incrementalCheckDelayNoticePeriod;
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
                    _incrementalCheckDelayNoticePeriod = value;
                }
            }

            private object? _incrementalCheckDelayNoticeTimes;

            /// <remarks>
            /// <strong>Property</strong>: incrementalCheckDelayNoticeTimes: The number of statistical periods of an alert on the data latency of the incremental data verification task.
            /// **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "incrementalCheckDelayNoticeTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncrementalCheckDelayNoticeTimes
            {
                get => _incrementalCheckDelayNoticeTimes;
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
                    _incrementalCheckDelayNoticeTimes = value;
                }
            }

            private object? _incrementalCheckDelayNoticeValue;

            /// <remarks>
            /// <strong>Property</strong>: incrementalCheckDelayNoticeValue: The alert threshold for the data latency of the incremental data verification task. Unit: seconds.
            /// **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "incrementalCheckDelayNoticeValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncrementalCheckDelayNoticeValue
            {
                get => _incrementalCheckDelayNoticeValue;
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
                    _incrementalCheckDelayNoticeValue = value;
                }
            }

            private object? _incrementalCheckErrorNotice;

            /// <remarks>
            /// <strong>Property</strong>: incrementalCheckErrorNotice: Specifies whether to trigger an alert if the incremental data verification task fails. Valid values: **true** and **false**.
            /// Note: For example, you set this parameter to **true**. If the incremental data verification task fails, an alert is triggered.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "incrementalCheckErrorNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncrementalCheckErrorNotice
            {
                get => _incrementalCheckErrorNotice;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _incrementalCheckErrorNotice = value;
                }
            }

            private object? _incrementalCheckValidFailNotice;

            /// <remarks>
            /// <strong>Property</strong>: incrementalCheckValidFailNotice: Specifies whether to trigger an alert if inconsistent data is detected by the incremental data verification task. Valid values: **true** and **false**.
            /// **Note**: For example, you set this parameter to **true**. If the cumulative number of inconsistent data entries detected by the incremental data verification task in several statistical periods is greater than or equal to the threshold that you specified, an alert is triggered.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "incrementalCheckValidFailNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncrementalCheckValidFailNotice
            {
                get => _incrementalCheckValidFailNotice;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _incrementalCheckValidFailNotice = value;
                }
            }

            private object? _incrementalCheckValidFailNoticePeriod;

            /// <remarks>
            /// <strong>Property</strong>: incrementalCheckValidFailNoticePeriod: The statistical period of an alert on inconsistent data entries detected by the incremental data verification task. Valid values:
            /// - **1**: 1 minute
            /// - **2**: 5 minutes
            /// - **3**: 10 minutes
            /// - **4**: 30 minutes
            /// **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "incrementalCheckValidFailNoticePeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncrementalCheckValidFailNoticePeriod
            {
                get => _incrementalCheckValidFailNoticePeriod;
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
                    _incrementalCheckValidFailNoticePeriod = value;
                }
            }

            private object? _incrementalCheckValidFailNoticeTimes;

            /// <remarks>
            /// <strong>Property</strong>: incrementalCheckValidFailNoticeTimes: The number of statistical periods of an alert on inconsistent data entries detected by the incremental data verification task.
            /// **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "incrementalCheckValidFailNoticeTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncrementalCheckValidFailNoticeTimes
            {
                get => _incrementalCheckValidFailNoticeTimes;
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
                    _incrementalCheckValidFailNoticeTimes = value;
                }
            }

            private object? _incrementalCheckValidFailNoticeValue;

            /// <remarks>
            /// <strong>Property</strong>: incrementalCheckValidFailNoticeValue: The alert threshold for inconsistent data entries detected by the incremental data verification task.
            /// **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "incrementalCheckValidFailNoticeValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncrementalCheckValidFailNoticeValue
            {
                get => _incrementalCheckValidFailNoticeValue;
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
                    _incrementalCheckValidFailNoticeValue = value;
                }
            }

            private object? _incrementalDataCheck;

            /// <remarks>
            /// <strong>Property</strong>: incrementalDataCheck: Specifies whether to perform an incremental data verification task. Valid values: **true** and **false**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "incrementalDataCheck", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncrementalDataCheck
            {
                get => _incrementalDataCheck;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _incrementalDataCheck = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IDestinationEndpointProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob2.DestinationEndpointProperty")]
        public interface IDestinationEndpointProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: instanceType: The type of the destination instance. Valid values:
            /// Alibaba Cloud database instances
            /// - **RDS**: ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, or ApsaraDB RDS for MariaDB TX instance
            /// - **PolarDB**: PolarDB for MySQL cluster
            /// - **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 (formerly DRDS) instance
            /// - **POLARDBX20**: PolarDB-X 2.0 instance
            /// - **REDIS**: ApsaraDB for Redis instance
            /// - **ADS**: AnalyticDB for MySQL V2.0 cluster or AnalyticDB for MySQL V3.0 cluster
            /// - **MONGODB**: ApsaraDB for MongoDB instance
            /// - **GREENPLUM**: AnalyticDB for PostgreSQL instance
            /// - **DATAHUB**: DataHub project
            /// - **ELK**: Elasticsearch cluster
            /// - **Tablestore**: Tablestore instance
            /// - **ODPS**: MaxCompute project
            /// Self-managed databases
            /// - **OTHER**: self-managed database with a public IP address
            /// - **ECS**: self-managed database hosted on an ECS instance
            /// - **EXPRESS**: self-managed database connected over Express Connect
            /// - **CEN**: self-managed database connected over CEN
            /// - **DG**: self-managed database connected over Database Gateway
            /// **Note**: If the destination instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), you must set this parameter to OTHER or EXPRESS. Then, you can connect the PolarDB for PostgreSQL cluster (compatible with Oracle) to DTS as a self-managed database by using a public IP address or Express Connect.
            /// If the destination instance is a Message Queue for Apache Kafka instance, you must set this parameter to ECS or EXPRESS. Then, you can connect the Message Queue for Apache Kafka instance to DTS as a self-managed database connected over ECS or Express Connect.
            /// If the destination instance is a self-managed database, you must deploy the network environment for the database.
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object InstanceType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: databaseName: The name of the database which contains the objects to be migrated in the destination instance.
            /// **Note**: This parameter is required only when the destination instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), a PostgreSQL database, or a MongoDB database.
            /// </remarks>
            [JsiiProperty(name: "databaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DatabaseName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: engineName: The database engine of the destination instance. Valid values:
            /// - **MYSQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
            /// - **MARIADB**: ApsaraDB RDS for MariaDB TX instance
            /// - **PolarDB**: PolarDB for MySQL cluster
            /// - **POLARDB_O**: PolarDB for PostgreSQL cluster (compatible with Oracle)
            /// - **POLARDBX10**: PolarDB-X 1.0 instance
            /// - **POLARDBX20**: PolarDB-X 2.0 instance
            /// - **ORACLE**: self-managed Oracle database
            /// - **POSTGRESQL**: ApsaraDB RDS for PostgreSQL instance or self-managed PostgreSQL database
            /// - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
            /// - **ADS**: AnalyticDB for MySQL V2.0 cluster
            /// - **ADB30**: AnalyticDB for MySQL V3.0 cluster- **MONGODB**: ApsaraDB for MongoDB instance or self-managed MongoDB database
            /// - **GREENPLUM**: AnalyticDB for PostgreSQL instance
            /// - **KAFKA**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
            /// - **DATAHUB**: DataHub project- **DB2**: self-managed Db2 for LUW database
            /// - **AS400**: self-managed Db2 for i database
            /// - **ODPS**: MaxCompute project
            /// - **Tablestore**: Tablestore instance
            /// - **ELK**: Elasticsearch cluster
            /// - **REDIS**: ApsaraDB for Redis instance or self-managed Redis database
            /// **Note**: Default value: **MYSQL**.
            /// If this parameter is set to **KAFKA**, **MONGODB**, or **PolarDB**, you must also specify the database information in the Reserve parameter.
            /// </remarks>
            [JsiiProperty(name: "engineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? EngineName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the destination instance. If the destination instance is an Alibaba Cloud database instance, you must specify the ID of the database instance. For example,
            /// - If the destination instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance.
            /// - If the destination instance is a self-managed database, the value of this parameter varies with the value of SourceEndpointInstanceType.
            /// - If InstanceType is set to ECS, you must specify the ID of the ECS instance.
            /// - If InstanceType is set to DG, you must specify the ID of the database gateway.
            /// - If InstanceType is set to EXPRESS or CEN, you must specify the ID of the VPC that is connected to the destination instance.
            /// **Note**: If DestinationEndpointInstanceType is set to CEN, you must also specify the ID of the CEN instance in the Reserve parameter.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? InstanceId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ip: The IP address of the destination instance.
            /// **Note**: This parameter is required only when **InstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
            /// </remarks>
            [JsiiProperty(name: "ip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Ip
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: oracleSid: The system ID (SID) of the Oracle database.
            /// **Note**: This parameter is required only when **EngineName** is set to **ORACLE** and the Oracle database is deployed in an architecture that is not a Real Application Cluster (RAC).
            /// </remarks>
            [JsiiProperty(name: "oracleSid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OracleSid
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ownerId: The ID of the Alibaba Cloud account to which the destination database belongs.
            /// **Note**: You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **Role**.
            /// </remarks>
            [JsiiProperty(name: "ownerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OwnerId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: password: The password of the destination database account.
            /// </remarks>
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Password
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The port number of the destination instance.
            /// **Note**: This parameter is required only when the destination instance is a self-managed database.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Port
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: region: The ID of the region in which the destination instance resides.
            /// **Note**: If the source instance is an Alibaba Cloud database instance, this parameter is required.
            /// </remarks>
            [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Region
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: role: The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account that owns the destination instance.
            /// **Note**: This parameter is required when you migrate or synchronize data across different Alibaba Cloud accounts.
            /// </remarks>
            [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Role
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: The database account of the destination database.
            /// **Note**: In most cases, this parameter is required. The permissions that are required for the database account vary with the migration or synchronization scenario.
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? UserName
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IDestinationEndpointProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob2.DestinationEndpointProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob2.IDestinationEndpointProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceType: The type of the destination instance. Valid values:
                /// Alibaba Cloud database instances
                /// - **RDS**: ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, or ApsaraDB RDS for MariaDB TX instance
                /// - **PolarDB**: PolarDB for MySQL cluster
                /// - **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 (formerly DRDS) instance
                /// - **POLARDBX20**: PolarDB-X 2.0 instance
                /// - **REDIS**: ApsaraDB for Redis instance
                /// - **ADS**: AnalyticDB for MySQL V2.0 cluster or AnalyticDB for MySQL V3.0 cluster
                /// - **MONGODB**: ApsaraDB for MongoDB instance
                /// - **GREENPLUM**: AnalyticDB for PostgreSQL instance
                /// - **DATAHUB**: DataHub project
                /// - **ELK**: Elasticsearch cluster
                /// - **Tablestore**: Tablestore instance
                /// - **ODPS**: MaxCompute project
                /// Self-managed databases
                /// - **OTHER**: self-managed database with a public IP address
                /// - **ECS**: self-managed database hosted on an ECS instance
                /// - **EXPRESS**: self-managed database connected over Express Connect
                /// - **CEN**: self-managed database connected over CEN
                /// - **DG**: self-managed database connected over Database Gateway
                /// **Note**: If the destination instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), you must set this parameter to OTHER or EXPRESS. Then, you can connect the PolarDB for PostgreSQL cluster (compatible with Oracle) to DTS as a self-managed database by using a public IP address or Express Connect.
                /// If the destination instance is a Message Queue for Apache Kafka instance, you must set this parameter to ECS or EXPRESS. Then, you can connect the Message Queue for Apache Kafka instance to DTS as a self-managed database connected over ECS or Express Connect.
                /// If the destination instance is a self-managed database, you must deploy the network environment for the database.
                /// </remarks>
                [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object InstanceType
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: databaseName: The name of the database which contains the objects to be migrated in the destination instance.
                /// **Note**: This parameter is required only when the destination instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), a PostgreSQL database, or a MongoDB database.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "databaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DatabaseName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: engineName: The database engine of the destination instance. Valid values:
                /// - **MYSQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
                /// - **MARIADB**: ApsaraDB RDS for MariaDB TX instance
                /// - **PolarDB**: PolarDB for MySQL cluster
                /// - **POLARDB_O**: PolarDB for PostgreSQL cluster (compatible with Oracle)
                /// - **POLARDBX10**: PolarDB-X 1.0 instance
                /// - **POLARDBX20**: PolarDB-X 2.0 instance
                /// - **ORACLE**: self-managed Oracle database
                /// - **POSTGRESQL**: ApsaraDB RDS for PostgreSQL instance or self-managed PostgreSQL database
                /// - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
                /// - **ADS**: AnalyticDB for MySQL V2.0 cluster
                /// - **ADB30**: AnalyticDB for MySQL V3.0 cluster- **MONGODB**: ApsaraDB for MongoDB instance or self-managed MongoDB database
                /// - **GREENPLUM**: AnalyticDB for PostgreSQL instance
                /// - **KAFKA**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
                /// - **DATAHUB**: DataHub project- **DB2**: self-managed Db2 for LUW database
                /// - **AS400**: self-managed Db2 for i database
                /// - **ODPS**: MaxCompute project
                /// - **Tablestore**: Tablestore instance
                /// - **ELK**: Elasticsearch cluster
                /// - **REDIS**: ApsaraDB for Redis instance or self-managed Redis database
                /// **Note**: Default value: **MYSQL**.
                /// If this parameter is set to **KAFKA**, **MONGODB**, or **PolarDB**, you must also specify the database information in the Reserve parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "engineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? EngineName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceId: The ID of the destination instance. If the destination instance is an Alibaba Cloud database instance, you must specify the ID of the database instance. For example,
                /// - If the destination instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance.
                /// - If the destination instance is a self-managed database, the value of this parameter varies with the value of SourceEndpointInstanceType.
                /// - If InstanceType is set to ECS, you must specify the ID of the ECS instance.
                /// - If InstanceType is set to DG, you must specify the ID of the database gateway.
                /// - If InstanceType is set to EXPRESS or CEN, you must specify the ID of the VPC that is connected to the destination instance.
                /// **Note**: If DestinationEndpointInstanceType is set to CEN, you must also specify the ID of the CEN instance in the Reserve parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? InstanceId
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ip: The IP address of the destination instance.
                /// **Note**: This parameter is required only when **InstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Ip
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: oracleSid: The system ID (SID) of the Oracle database.
                /// **Note**: This parameter is required only when **EngineName** is set to **ORACLE** and the Oracle database is deployed in an architecture that is not a Real Application Cluster (RAC).
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "oracleSid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OracleSid
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ownerId: The ID of the Alibaba Cloud account to which the destination database belongs.
                /// **Note**: You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **Role**.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ownerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OwnerId
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: password: The password of the destination database account.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Password
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: port: The port number of the destination instance.
                /// **Note**: This parameter is required only when the destination instance is a self-managed database.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Port
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: region: The ID of the region in which the destination instance resides.
                /// **Note**: If the source instance is an Alibaba Cloud database instance, this parameter is required.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Region
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: role: The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account that owns the destination instance.
                /// **Note**: This parameter is required when you migrate or synchronize data across different Alibaba Cloud accounts.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Role
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: userName: The database account of the destination database.
                /// **Note**: In most cases, this parameter is required. The permissions that are required for the database account vary with the migration or synchronization scenario.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? UserName
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosSynchronizationJob2.DestinationEndpointProperty")]
        public class DestinationEndpointProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob2.IDestinationEndpointProperty
        {
            private object _instanceType;

            /// <remarks>
            /// <strong>Property</strong>: instanceType: The type of the destination instance. Valid values:
            /// Alibaba Cloud database instances
            /// - **RDS**: ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, or ApsaraDB RDS for MariaDB TX instance
            /// - **PolarDB**: PolarDB for MySQL cluster
            /// - **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 (formerly DRDS) instance
            /// - **POLARDBX20**: PolarDB-X 2.0 instance
            /// - **REDIS**: ApsaraDB for Redis instance
            /// - **ADS**: AnalyticDB for MySQL V2.0 cluster or AnalyticDB for MySQL V3.0 cluster
            /// - **MONGODB**: ApsaraDB for MongoDB instance
            /// - **GREENPLUM**: AnalyticDB for PostgreSQL instance
            /// - **DATAHUB**: DataHub project
            /// - **ELK**: Elasticsearch cluster
            /// - **Tablestore**: Tablestore instance
            /// - **ODPS**: MaxCompute project
            /// Self-managed databases
            /// - **OTHER**: self-managed database with a public IP address
            /// - **ECS**: self-managed database hosted on an ECS instance
            /// - **EXPRESS**: self-managed database connected over Express Connect
            /// - **CEN**: self-managed database connected over CEN
            /// - **DG**: self-managed database connected over Database Gateway
            /// **Note**: If the destination instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), you must set this parameter to OTHER or EXPRESS. Then, you can connect the PolarDB for PostgreSQL cluster (compatible with Oracle) to DTS as a self-managed database by using a public IP address or Express Connect.
            /// If the destination instance is a Message Queue for Apache Kafka instance, you must set this parameter to ECS or EXPRESS. Then, you can connect the Message Queue for Apache Kafka instance to DTS as a self-managed database connected over ECS or Express Connect.
            /// If the destination instance is a self-managed database, you must deploy the network environment for the database.
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceType
            {
                get => _instanceType;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _instanceType = value;
                }
            }

            private object? _databaseName;

            /// <remarks>
            /// <strong>Property</strong>: databaseName: The name of the database which contains the objects to be migrated in the destination instance.
            /// **Note**: This parameter is required only when the destination instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), a PostgreSQL database, or a MongoDB database.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "databaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DatabaseName
            {
                get => _databaseName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _databaseName = value;
                }
            }

            private object? _engineName;

            /// <remarks>
            /// <strong>Property</strong>: engineName: The database engine of the destination instance. Valid values:
            /// - **MYSQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
            /// - **MARIADB**: ApsaraDB RDS for MariaDB TX instance
            /// - **PolarDB**: PolarDB for MySQL cluster
            /// - **POLARDB_O**: PolarDB for PostgreSQL cluster (compatible with Oracle)
            /// - **POLARDBX10**: PolarDB-X 1.0 instance
            /// - **POLARDBX20**: PolarDB-X 2.0 instance
            /// - **ORACLE**: self-managed Oracle database
            /// - **POSTGRESQL**: ApsaraDB RDS for PostgreSQL instance or self-managed PostgreSQL database
            /// - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
            /// - **ADS**: AnalyticDB for MySQL V2.0 cluster
            /// - **ADB30**: AnalyticDB for MySQL V3.0 cluster- **MONGODB**: ApsaraDB for MongoDB instance or self-managed MongoDB database
            /// - **GREENPLUM**: AnalyticDB for PostgreSQL instance
            /// - **KAFKA**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
            /// - **DATAHUB**: DataHub project- **DB2**: self-managed Db2 for LUW database
            /// - **AS400**: self-managed Db2 for i database
            /// - **ODPS**: MaxCompute project
            /// - **Tablestore**: Tablestore instance
            /// - **ELK**: Elasticsearch cluster
            /// - **REDIS**: ApsaraDB for Redis instance or self-managed Redis database
            /// **Note**: Default value: **MYSQL**.
            /// If this parameter is set to **KAFKA**, **MONGODB**, or **PolarDB**, you must also specify the database information in the Reserve parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "engineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EngineName
            {
                get => _engineName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _engineName = value;
                }
            }

            private object? _instanceId;

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the destination instance. If the destination instance is an Alibaba Cloud database instance, you must specify the ID of the database instance. For example,
            /// - If the destination instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance.
            /// - If the destination instance is a self-managed database, the value of this parameter varies with the value of SourceEndpointInstanceType.
            /// - If InstanceType is set to ECS, you must specify the ID of the ECS instance.
            /// - If InstanceType is set to DG, you must specify the ID of the database gateway.
            /// - If InstanceType is set to EXPRESS or CEN, you must specify the ID of the VPC that is connected to the destination instance.
            /// **Note**: If DestinationEndpointInstanceType is set to CEN, you must also specify the ID of the CEN instance in the Reserve parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => _instanceId;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _instanceId = value;
                }
            }

            private object? _ip;

            /// <remarks>
            /// <strong>Property</strong>: ip: The IP address of the destination instance.
            /// **Note**: This parameter is required only when **InstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ip
            {
                get => _ip;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _ip = value;
                }
            }

            private object? _oracleSid;

            /// <remarks>
            /// <strong>Property</strong>: oracleSid: The system ID (SID) of the Oracle database.
            /// **Note**: This parameter is required only when **EngineName** is set to **ORACLE** and the Oracle database is deployed in an architecture that is not a Real Application Cluster (RAC).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "oracleSid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OracleSid
            {
                get => _oracleSid;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _oracleSid = value;
                }
            }

            private object? _ownerId;

            /// <remarks>
            /// <strong>Property</strong>: ownerId: The ID of the Alibaba Cloud account to which the destination database belongs.
            /// **Note**: You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **Role**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ownerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OwnerId
            {
                get => _ownerId;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _ownerId = value;
                }
            }

            private object? _password;

            /// <remarks>
            /// <strong>Property</strong>: password: The password of the destination database account.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Password
            {
                get => _password;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _password = value;
                }
            }

            private object? _port;

            /// <remarks>
            /// <strong>Property</strong>: port: The port number of the destination instance.
            /// **Note**: This parameter is required only when the destination instance is a self-managed database.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Port
            {
                get => _port;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _port = value;
                }
            }

            private object? _region;

            /// <remarks>
            /// <strong>Property</strong>: region: The ID of the region in which the destination instance resides.
            /// **Note**: If the source instance is an Alibaba Cloud database instance, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Region
            {
                get => _region;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _region = value;
                }
            }

            private object? _role;

            /// <remarks>
            /// <strong>Property</strong>: role: The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account that owns the destination instance.
            /// **Note**: This parameter is required when you migrate or synchronize data across different Alibaba Cloud accounts.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Role
            {
                get => _role;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _role = value;
                }
            }

            private object? _userName;

            /// <remarks>
            /// <strong>Property</strong>: userName: The database account of the destination database.
            /// **Note**: In most cases, this parameter is required. The permissions that are required for the database account vary with the migration or synchronization scenario.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserName
            {
                get => _userName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _userName = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(ISourceEndpointProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob2.SourceEndpointProperty")]
        public interface ISourceEndpointProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: instanceType: The type of the source instance. Valid values:
            /// Alibaba Cloud database instances:
            /// - **RDS**: ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, or ApsaraDB RDS for MariaDB TX instance
            /// - **PolarDB**: PolarDB for MySQL cluster
            /// - **REDIS**: ApsaraDB for Redis instance
            /// - **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 (formerly DRDS) instance
            /// - **POLARDBX20**: PolarDB-X 2.0 instance
            /// - **MONGODB**: ApsaraDB for MongoDB instance
            /// - **DISTRIBUTED_DMSLOGICDB**: Data Management (DMS) logical database
            /// Self-managed databases:
            /// - **OTHER**: self-managed database with a public IP address
            /// - **ECS**: self-managed database hosted on an Elastic Compute Service (ECS) instance
            /// - **EXPRESS**: self-managed database connected over Express Connect
            /// - **CEN**: self-managed database connected over Cloud Enterprise Network (CEN)
            /// - **DG**: self-managed database connected over Database Gateway
            /// **Note**: If the source instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), you must set this parameter to **OTHER** or **EXPRESS**. Then, you can connect the PolarDB for PostgreSQL cluster to DTS as a self-managed database by using a public IP address or Express Connect. If the source instance is a self-managed database, you must deploy the network environment for the database.
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object InstanceType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: databaseName: The name of the database which contains the objects to be migrated in the source instance.
            /// **Note**: This parameter is required only when the source instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), a PostgreSQL database, or a MongoDB database.
            /// </remarks>
            [JsiiProperty(name: "databaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DatabaseName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: engineName: The database engine of the source instance. Valid values:
            /// - **MYSQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
            /// - **MARIADB**: ApsaraDB RDS for MariaDB TX instance
            /// - **PolarDB**: PolarDB for MySQL cluster
            /// - **POLARDB_O**: PolarDB for PostgreSQL cluster (compatible with Oracle)
            /// - **POLARDBX10**: PolarDB-X 1.0 instance
            /// - **POLARDBX20**: PolarDB-X 2.0 instance
            /// - **ORACLE**: self-managed Oracle database
            /// - **POSTGRESQL**: ApsaraDB RDS for PostgreSQL instance or self-managed PostgreSQL database
            /// - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
            /// - **MONGODB**: ApsaraDB for MongoDB instance or self-managed MongoDB database
            /// - **DB2**: self-managed Db2 for LUW database
            /// - **AS400**: self-managed Db2 for i database
            /// - **DMSPOLARDB**: DMS logical database
            /// - **HBASE**: self-managed HBase database
            /// - **TERADATA**: Teradata database
            /// - **TiDB**: TiDB database
            /// - **REDIS**: ApsaraDB for Redis instance or self-managed Redis database
            /// **Note**: Default value: **MYSQL**.
            /// If EngineName is set to **MONGODB**, you must also specify the architecture type of the **MongoDB** database in the **Reserve** parameter.
            /// </remarks>
            [JsiiProperty(name: "engineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? EngineName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the source instance. If the source instance is an Alibaba Cloud database instance, you must specify the ID of the database instance. For example,
            /// - If the source instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance.
            /// - If the source instance is a self-managed database, the value of this parameter varies with the value of SourceEndpointInstanceType.
            /// - If InstanceType is set to ECS, you must specify the ID of the ECS instance.
            /// - If InstanceType is set to DG, you must specify the ID of the database gateway.
            /// - If InstanceType is set to EXPRESS or CEN, you must specify the ID of the VPC that is connected to the source instance.
            /// **Note**: If DestinationEndpointInstanceType is set to CEN, you must also specify the ID of the CEN instance in the Reserve parameter.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? InstanceId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ip: The IP address of the source instance.
            /// **Note**: This parameter is required only when **InstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
            /// </remarks>
            [JsiiProperty(name: "ip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Ip
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: oracleSid: The system ID (SID) of the Oracle database.
            /// **Note**: This parameter is required only when **EngineName** is set to **ORACLE** and the Oracle database is deployed in an architecture that is not a Real Application Cluster (RAC).
            /// </remarks>
            [JsiiProperty(name: "oracleSid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OracleSid
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ownerId: The ID of the Alibaba Cloud account to which the source database belongs.
            /// **Note**: You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **Role**.
            /// </remarks>
            [JsiiProperty(name: "ownerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OwnerId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: password: The password of the source database account.
            /// </remarks>
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Password
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The port number of the source instance.
            /// **Note**: This parameter is required only when the source instance is a self-managed database.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Port
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: region: The ID of the region in which the source instance resides.
            /// **Note**: If the source instance is an Alibaba Cloud database instance, this parameter is required.
            /// </remarks>
            [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Region
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: role: The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account that owns the source instance.
            /// **Note**: This parameter is required when you migrate or synchronize data across different Alibaba Cloud accounts.
            /// </remarks>
            [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Role
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: The database account of the source database.
            /// **Note**: In most cases, this parameter is required. The permissions that are required for the database account vary with the migration or synchronization scenario.
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? UserName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The ID of the vSwitch used for the data shipping link.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? VSwitchId
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ISourceEndpointProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob2.SourceEndpointProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob2.ISourceEndpointProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceType: The type of the source instance. Valid values:
                /// Alibaba Cloud database instances:
                /// - **RDS**: ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, or ApsaraDB RDS for MariaDB TX instance
                /// - **PolarDB**: PolarDB for MySQL cluster
                /// - **REDIS**: ApsaraDB for Redis instance
                /// - **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 (formerly DRDS) instance
                /// - **POLARDBX20**: PolarDB-X 2.0 instance
                /// - **MONGODB**: ApsaraDB for MongoDB instance
                /// - **DISTRIBUTED_DMSLOGICDB**: Data Management (DMS) logical database
                /// Self-managed databases:
                /// - **OTHER**: self-managed database with a public IP address
                /// - **ECS**: self-managed database hosted on an Elastic Compute Service (ECS) instance
                /// - **EXPRESS**: self-managed database connected over Express Connect
                /// - **CEN**: self-managed database connected over Cloud Enterprise Network (CEN)
                /// - **DG**: self-managed database connected over Database Gateway
                /// **Note**: If the source instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), you must set this parameter to **OTHER** or **EXPRESS**. Then, you can connect the PolarDB for PostgreSQL cluster to DTS as a self-managed database by using a public IP address or Express Connect. If the source instance is a self-managed database, you must deploy the network environment for the database.
                /// </remarks>
                [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object InstanceType
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: databaseName: The name of the database which contains the objects to be migrated in the source instance.
                /// **Note**: This parameter is required only when the source instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), a PostgreSQL database, or a MongoDB database.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "databaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DatabaseName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: engineName: The database engine of the source instance. Valid values:
                /// - **MYSQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
                /// - **MARIADB**: ApsaraDB RDS for MariaDB TX instance
                /// - **PolarDB**: PolarDB for MySQL cluster
                /// - **POLARDB_O**: PolarDB for PostgreSQL cluster (compatible with Oracle)
                /// - **POLARDBX10**: PolarDB-X 1.0 instance
                /// - **POLARDBX20**: PolarDB-X 2.0 instance
                /// - **ORACLE**: self-managed Oracle database
                /// - **POSTGRESQL**: ApsaraDB RDS for PostgreSQL instance or self-managed PostgreSQL database
                /// - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
                /// - **MONGODB**: ApsaraDB for MongoDB instance or self-managed MongoDB database
                /// - **DB2**: self-managed Db2 for LUW database
                /// - **AS400**: self-managed Db2 for i database
                /// - **DMSPOLARDB**: DMS logical database
                /// - **HBASE**: self-managed HBase database
                /// - **TERADATA**: Teradata database
                /// - **TiDB**: TiDB database
                /// - **REDIS**: ApsaraDB for Redis instance or self-managed Redis database
                /// **Note**: Default value: **MYSQL**.
                /// If EngineName is set to **MONGODB**, you must also specify the architecture type of the **MongoDB** database in the **Reserve** parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "engineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? EngineName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceId: The ID of the source instance. If the source instance is an Alibaba Cloud database instance, you must specify the ID of the database instance. For example,
                /// - If the source instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance.
                /// - If the source instance is a self-managed database, the value of this parameter varies with the value of SourceEndpointInstanceType.
                /// - If InstanceType is set to ECS, you must specify the ID of the ECS instance.
                /// - If InstanceType is set to DG, you must specify the ID of the database gateway.
                /// - If InstanceType is set to EXPRESS or CEN, you must specify the ID of the VPC that is connected to the source instance.
                /// **Note**: If DestinationEndpointInstanceType is set to CEN, you must also specify the ID of the CEN instance in the Reserve parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? InstanceId
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ip: The IP address of the source instance.
                /// **Note**: This parameter is required only when **InstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Ip
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: oracleSid: The system ID (SID) of the Oracle database.
                /// **Note**: This parameter is required only when **EngineName** is set to **ORACLE** and the Oracle database is deployed in an architecture that is not a Real Application Cluster (RAC).
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "oracleSid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OracleSid
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ownerId: The ID of the Alibaba Cloud account to which the source database belongs.
                /// **Note**: You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **Role**.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ownerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OwnerId
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: password: The password of the source database account.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Password
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: port: The port number of the source instance.
                /// **Note**: This parameter is required only when the source instance is a self-managed database.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Port
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: region: The ID of the region in which the source instance resides.
                /// **Note**: If the source instance is an Alibaba Cloud database instance, this parameter is required.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Region
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: role: The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account that owns the source instance.
                /// **Note**: This parameter is required when you migrate or synchronize data across different Alibaba Cloud accounts.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Role
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: userName: The database account of the source database.
                /// **Note**: In most cases, this parameter is required. The permissions that are required for the database account vary with the migration or synchronization scenario.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? UserName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: vSwitchId: The ID of the vSwitch used for the data shipping link.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? VSwitchId
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosSynchronizationJob2.SourceEndpointProperty")]
        public class SourceEndpointProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob2.ISourceEndpointProperty
        {
            private object _instanceType;

            /// <remarks>
            /// <strong>Property</strong>: instanceType: The type of the source instance. Valid values:
            /// Alibaba Cloud database instances:
            /// - **RDS**: ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, or ApsaraDB RDS for MariaDB TX instance
            /// - **PolarDB**: PolarDB for MySQL cluster
            /// - **REDIS**: ApsaraDB for Redis instance
            /// - **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 (formerly DRDS) instance
            /// - **POLARDBX20**: PolarDB-X 2.0 instance
            /// - **MONGODB**: ApsaraDB for MongoDB instance
            /// - **DISTRIBUTED_DMSLOGICDB**: Data Management (DMS) logical database
            /// Self-managed databases:
            /// - **OTHER**: self-managed database with a public IP address
            /// - **ECS**: self-managed database hosted on an Elastic Compute Service (ECS) instance
            /// - **EXPRESS**: self-managed database connected over Express Connect
            /// - **CEN**: self-managed database connected over Cloud Enterprise Network (CEN)
            /// - **DG**: self-managed database connected over Database Gateway
            /// **Note**: If the source instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), you must set this parameter to **OTHER** or **EXPRESS**. Then, you can connect the PolarDB for PostgreSQL cluster to DTS as a self-managed database by using a public IP address or Express Connect. If the source instance is a self-managed database, you must deploy the network environment for the database.
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceType
            {
                get => _instanceType;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _instanceType = value;
                }
            }

            private object? _databaseName;

            /// <remarks>
            /// <strong>Property</strong>: databaseName: The name of the database which contains the objects to be migrated in the source instance.
            /// **Note**: This parameter is required only when the source instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), a PostgreSQL database, or a MongoDB database.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "databaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DatabaseName
            {
                get => _databaseName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _databaseName = value;
                }
            }

            private object? _engineName;

            /// <remarks>
            /// <strong>Property</strong>: engineName: The database engine of the source instance. Valid values:
            /// - **MYSQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
            /// - **MARIADB**: ApsaraDB RDS for MariaDB TX instance
            /// - **PolarDB**: PolarDB for MySQL cluster
            /// - **POLARDB_O**: PolarDB for PostgreSQL cluster (compatible with Oracle)
            /// - **POLARDBX10**: PolarDB-X 1.0 instance
            /// - **POLARDBX20**: PolarDB-X 2.0 instance
            /// - **ORACLE**: self-managed Oracle database
            /// - **POSTGRESQL**: ApsaraDB RDS for PostgreSQL instance or self-managed PostgreSQL database
            /// - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
            /// - **MONGODB**: ApsaraDB for MongoDB instance or self-managed MongoDB database
            /// - **DB2**: self-managed Db2 for LUW database
            /// - **AS400**: self-managed Db2 for i database
            /// - **DMSPOLARDB**: DMS logical database
            /// - **HBASE**: self-managed HBase database
            /// - **TERADATA**: Teradata database
            /// - **TiDB**: TiDB database
            /// - **REDIS**: ApsaraDB for Redis instance or self-managed Redis database
            /// **Note**: Default value: **MYSQL**.
            /// If EngineName is set to **MONGODB**, you must also specify the architecture type of the **MongoDB** database in the **Reserve** parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "engineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EngineName
            {
                get => _engineName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _engineName = value;
                }
            }

            private object? _instanceId;

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the source instance. If the source instance is an Alibaba Cloud database instance, you must specify the ID of the database instance. For example,
            /// - If the source instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance.
            /// - If the source instance is a self-managed database, the value of this parameter varies with the value of SourceEndpointInstanceType.
            /// - If InstanceType is set to ECS, you must specify the ID of the ECS instance.
            /// - If InstanceType is set to DG, you must specify the ID of the database gateway.
            /// - If InstanceType is set to EXPRESS or CEN, you must specify the ID of the VPC that is connected to the source instance.
            /// **Note**: If DestinationEndpointInstanceType is set to CEN, you must also specify the ID of the CEN instance in the Reserve parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => _instanceId;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _instanceId = value;
                }
            }

            private object? _ip;

            /// <remarks>
            /// <strong>Property</strong>: ip: The IP address of the source instance.
            /// **Note**: This parameter is required only when **InstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ip
            {
                get => _ip;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _ip = value;
                }
            }

            private object? _oracleSid;

            /// <remarks>
            /// <strong>Property</strong>: oracleSid: The system ID (SID) of the Oracle database.
            /// **Note**: This parameter is required only when **EngineName** is set to **ORACLE** and the Oracle database is deployed in an architecture that is not a Real Application Cluster (RAC).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "oracleSid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OracleSid
            {
                get => _oracleSid;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _oracleSid = value;
                }
            }

            private object? _ownerId;

            /// <remarks>
            /// <strong>Property</strong>: ownerId: The ID of the Alibaba Cloud account to which the source database belongs.
            /// **Note**: You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **Role**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ownerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OwnerId
            {
                get => _ownerId;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _ownerId = value;
                }
            }

            private object? _password;

            /// <remarks>
            /// <strong>Property</strong>: password: The password of the source database account.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Password
            {
                get => _password;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _password = value;
                }
            }

            private object? _port;

            /// <remarks>
            /// <strong>Property</strong>: port: The port number of the source instance.
            /// **Note**: This parameter is required only when the source instance is a self-managed database.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Port
            {
                get => _port;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _port = value;
                }
            }

            private object? _region;

            /// <remarks>
            /// <strong>Property</strong>: region: The ID of the region in which the source instance resides.
            /// **Note**: If the source instance is an Alibaba Cloud database instance, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Region
            {
                get => _region;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _region = value;
                }
            }

            private object? _role;

            /// <remarks>
            /// <strong>Property</strong>: role: The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account that owns the source instance.
            /// **Note**: This parameter is required when you migrate or synchronize data across different Alibaba Cloud accounts.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Role
            {
                get => _role;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _role = value;
                }
            }

            private object? _userName;

            /// <remarks>
            /// <strong>Property</strong>: userName: The database account of the source database.
            /// **Note**: In most cases, this parameter is required. The permissions that are required for the database account vary with the migration or synchronization scenario.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserName
            {
                get => _userName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _userName = value;
                }
            }

            private object? _vSwitchId;

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The ID of the vSwitch used for the data shipping link.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => _vSwitchId;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _vSwitchId = value;
                }
            }
        }
    }
}
