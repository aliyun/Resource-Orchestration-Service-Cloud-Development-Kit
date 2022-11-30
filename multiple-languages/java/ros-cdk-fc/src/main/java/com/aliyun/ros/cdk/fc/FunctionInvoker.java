package com.aliyun.ros.cdk.fc;

/**
 * A ROS resource type:  `ALIYUN::FC::FunctionInvoker`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:19.571Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.FunctionInvoker")
public class FunctionInvoker extends com.aliyun.ros.cdk.core.Resource {

    protected FunctionInvoker(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FunctionInvoker(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::FC::FunctionInvoker`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public FunctionInvoker(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.FunctionInvokerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::FC::FunctionInvoker`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public FunctionInvoker(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.FunctionInvokerProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Result: Depends on result type: NoResult: Async invoke has no result.
     * <p>
     * Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
     * Failure: Error Message.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResult() {
        return software.amazon.jsii.Kernel.get(this, "attrResult", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResultType: Result type: NoResult: Async invoke has no result.
     * <p>
     * Success: Sync invoke succeeds.
     * Failure: Sync invoke fails.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResultType() {
        return software.amazon.jsii.Kernel.get(this, "attrResultType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc.FunctionInvoker}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc.FunctionInvoker> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.fc.FunctionInvokerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc.FunctionInvokerProps.Builder();
        }

        /**
         * Property functionName: Function name.
         * <p>
         * @return {@code this}
         * @param functionName Property functionName: Function name. This parameter is required.
         */
        public Builder functionName(final java.lang.String functionName) {
            this.props.functionName(functionName);
            return this;
        }
        /**
         * Property functionName: Function name.
         * <p>
         * @return {@code this}
         * @param functionName Property functionName: Function name. This parameter is required.
         */
        public Builder functionName(final com.aliyun.ros.cdk.core.IResolvable functionName) {
            this.props.functionName(functionName);
            return this;
        }

        /**
         * Property serviceName: Service name.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: Service name. This parameter is required.
         */
        public Builder serviceName(final java.lang.String serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }
        /**
         * Property serviceName: Service name.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: Service name. This parameter is required.
         */
        public Builder serviceName(final com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }

        /**
         * Property async: Invocation type, Sync or Async.
         * <p>
         * Defaults to Sync.
         * <p>
         * @return {@code this}
         * @param async Property async: Invocation type, Sync or Async. This parameter is required.
         */
        public Builder async(final java.lang.Boolean async) {
            this.props.async(async);
            return this;
        }
        /**
         * Property async: Invocation type, Sync or Async.
         * <p>
         * Defaults to Sync.
         * <p>
         * @return {@code this}
         * @param async Property async: Invocation type, Sync or Async. This parameter is required.
         */
        public Builder async(final com.aliyun.ros.cdk.core.IResolvable async) {
            this.props.async(async);
            return this;
        }

        /**
         * Property checkError: Whether check error for function invocation result.
         * <p>
         * If set true and function invocation result has error, the resource creation will be regard as failed.
         * Default is false
         * <p>
         * @return {@code this}
         * @param checkError Property checkError: Whether check error for function invocation result. This parameter is required.
         */
        public Builder checkError(final java.lang.Boolean checkError) {
            this.props.checkError(checkError);
            return this;
        }
        /**
         * Property checkError: Whether check error for function invocation result.
         * <p>
         * If set true and function invocation result has error, the resource creation will be regard as failed.
         * Default is false
         * <p>
         * @return {@code this}
         * @param checkError Property checkError: Whether check error for function invocation result. This parameter is required.
         */
        public Builder checkError(final com.aliyun.ros.cdk.core.IResolvable checkError) {
            this.props.checkError(checkError);
            return this;
        }

        /**
         * Property event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value. If the value needs to be binary, encode it via base64 before passing to this property.
         * <p>
         * @return {@code this}
         * @param event Property event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value. If the value needs to be binary, encode it via base64 before passing to this property. This parameter is required.
         */
        public Builder event(final java.lang.String event) {
            this.props.event(event);
            return this;
        }
        /**
         * Property event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value. If the value needs to be binary, encode it via base64 before passing to this property.
         * <p>
         * @return {@code this}
         * @param event Property event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value. If the value needs to be binary, encode it via base64 before passing to this property. This parameter is required.
         */
        public Builder event(final com.aliyun.ros.cdk.core.IResolvable event) {
            this.props.event(event);
            return this;
        }

        /**
         * Property executeVersion: If the property is not specified for creation and update, the function will not be invoked.
         * <p>
         * The change of the property leads to the invoke of the function.
         * <p>
         * @return {@code this}
         * @param executeVersion Property executeVersion: If the property is not specified for creation and update, the function will not be invoked. This parameter is required.
         */
        public Builder executeVersion(final java.lang.Number executeVersion) {
            this.props.executeVersion(executeVersion);
            return this;
        }
        /**
         * Property executeVersion: If the property is not specified for creation and update, the function will not be invoked.
         * <p>
         * The change of the property leads to the invoke of the function.
         * <p>
         * @return {@code this}
         * @param executeVersion Property executeVersion: If the property is not specified for creation and update, the function will not be invoked. This parameter is required.
         */
        public Builder executeVersion(final com.aliyun.ros.cdk.core.IResolvable executeVersion) {
            this.props.executeVersion(executeVersion);
            return this;
        }

        /**
         * Property qualifier: service version, can be versionId or aliasName.
         * <p>
         * @return {@code this}
         * @param qualifier Property qualifier: service version, can be versionId or aliasName. This parameter is required.
         */
        public Builder qualifier(final java.lang.String qualifier) {
            this.props.qualifier(qualifier);
            return this;
        }
        /**
         * Property qualifier: service version, can be versionId or aliasName.
         * <p>
         * @return {@code this}
         * @param qualifier Property qualifier: service version, can be versionId or aliasName. This parameter is required.
         */
        public Builder qualifier(final com.aliyun.ros.cdk.core.IResolvable qualifier) {
            this.props.qualifier(qualifier);
            return this;
        }

        /**
         * Property serviceRegionId: Which region service belongs to.
         * <p>
         * @return {@code this}
         * @param serviceRegionId Property serviceRegionId: Which region service belongs to. This parameter is required.
         */
        public Builder serviceRegionId(final java.lang.String serviceRegionId) {
            this.props.serviceRegionId(serviceRegionId);
            return this;
        }
        /**
         * Property serviceRegionId: Which region service belongs to.
         * <p>
         * @return {@code this}
         * @param serviceRegionId Property serviceRegionId: Which region service belongs to. This parameter is required.
         */
        public Builder serviceRegionId(final com.aliyun.ros.cdk.core.IResolvable serviceRegionId) {
            this.props.serviceRegionId(serviceRegionId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.fc.FunctionInvoker}.
         */
        @Override
        public com.aliyun.ros.cdk.fc.FunctionInvoker build() {
            return new com.aliyun.ros.cdk.fc.FunctionInvoker(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
