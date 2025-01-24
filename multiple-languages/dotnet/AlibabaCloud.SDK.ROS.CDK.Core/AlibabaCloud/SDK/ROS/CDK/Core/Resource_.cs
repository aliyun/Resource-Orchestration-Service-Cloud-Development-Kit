using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>A construct which represents a resource.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.Resource_), fullyQualifiedName: "@alicloud/ros-cdk-core.Resource", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ResourceProps\"}}]")]
    public abstract class Resource_ : AlibabaCloud.SDK.ROS.CDK.Core.Construct, AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        protected Resource_(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Core.IResourceProps? props = null): base(_MakeDeputyProps(scope, id, props))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Core.IResourceProps? props = null)
        {
            return new DeputyProps(new object?[]{scope, id, props});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Resource_(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Resource_(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "addCondition", parametersJson: "[{\"name\":\"condition\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.RosCondition\"}}]")]
        public virtual void AddCondition(AlibabaCloud.SDK.ROS.CDK.Core.RosCondition condition)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosCondition)}, new object[]{condition});
        }

        [JsiiMethod(name: "addCount", parametersJson: "[{\"name\":\"count\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}}]")]
        public virtual void AddCount(object count)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (count)
                {
                    case double cast_6c3549:
                        break;
                    case byte cast_6c3549:
                        break;
                    case decimal cast_6c3549:
                        break;
                    case float cast_6c3549:
                        break;
                    case int cast_6c3549:
                        break;
                    case long cast_6c3549:
                        break;
                    case sbyte cast_6c3549:
                        break;
                    case short cast_6c3549:
                        break;
                    case uint cast_6c3549:
                        break;
                    case ulong cast_6c3549:
                        break;
                    case ushort cast_6c3549:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_6c3549:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_6c3549:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(count)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(count));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(count)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {count.GetType().FullName}", nameof(count));
                }
            }
            InvokeInstanceVoidMethod(new System.Type[]{typeof(object)}, new object[]{count});
        }

        [JsiiMethod(name: "addDependency", parametersJson: "[{\"name\":\"resource\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Resource\"}}]")]
        public virtual void AddDependency(AlibabaCloud.SDK.ROS.CDK.Core.Resource_ resource)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.Resource_)}, new object[]{resource});
        }

        [JsiiMethod(name: "addResourceDesc", parametersJson: "[{\"name\":\"desc\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual void AddResourceDesc(string desc)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string)}, new object[]{desc});
        }

        [JsiiMethod(name: "applyRemovalPolicy", parametersJson: "[{\"name\":\"policy\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.RemovalPolicy\"}}]")]
        public virtual void ApplyRemovalPolicy(AlibabaCloud.SDK.ROS.CDK.Core.RemovalPolicy policy)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.RemovalPolicy)}, new object[]{policy});
        }

        [JsiiMethod(name: "fetchCondition", returnsJson: "{\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.RosCondition\"}}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.RosCondition? FetchCondition()
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Core.RosCondition?>(new System.Type[]{}, new object[]{});
        }

        [JsiiMethod(name: "fetchDependency", returnsJson: "{\"optional\":true,\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}}")]
        public virtual string[]? FetchDependency()
        {
            return InvokeInstanceMethod<string[]?>(new System.Type[]{}, new object[]{});
        }

        [JsiiMethod(name: "fetchResourceDesc", returnsJson: "{\"optional\":true,\"type\":{\"primitive\":\"string\"}}")]
        public virtual string? FetchResourceDesc()
        {
            return InvokeInstanceMethod<string?>(new System.Type[]{}, new object[]{});
        }

        [JsiiMethod(name: "generatePhysicalName", returnsJson: "{\"type\":{\"primitive\":\"string\"}}")]
        protected virtual string GeneratePhysicalName()
        {
            return InvokeInstanceMethod<string>(new System.Type[]{}, new object[]{})!;
        }

        [JsiiMethod(name: "getAtt", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}", parametersJson: "[{\"name\":\"name\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable GetAtt(string name)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>(new System.Type[]{typeof(string)}, new object[]{name})!;
        }

        [JsiiMethod(name: "setMetadata", parametersJson: "[{\"name\":\"key\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"value\",\"type\":{\"primitive\":\"any\"}}]")]
        public virtual void SetMetadata(string key, object @value)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string), typeof(object)}, new object[]{key, @value});
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
        [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
        }

        /// <summary>(experimental) Returns a string-encoded token that resolves to the physical name that should be passed to the ROS resource.</summary>
        /// <remarks>
        /// This value will resolve to one of the following:
        ///
        /// <list type="bullet">
        /// <description>a concrete value (e.g. <c>"my-awesome-bucket"</c>)</description>
        /// <description><c>undefined</c>, when a name should be generated by ROS</description>
        /// <description>a concrete name generated automatically during synthesis, in
        /// cross-environment scenarios.</description>
        /// </list>
        ///
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiProperty(name: "physicalName", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string PhysicalName
        {
            get => GetInstanceProperty<string>()!;
        }

        [JsiiProperty(name: "ref", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Ref
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>The stack in which this resource is defined.</summary>
        [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
        }

        [JsiiOptional]
        [JsiiProperty(name: "resource", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.RosResource\"}", isOptional: true)]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.RosResource? Resource
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.RosResource?>();
            set => SetInstanceProperty(value);
        }

        /// <summary>A construct which represents a resource.</summary>
        [JsiiTypeProxy(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.Resource_), fullyQualifiedName: "@alicloud/ros-cdk-core.Resource")]
        internal sealed class _Proxy : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public override AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
