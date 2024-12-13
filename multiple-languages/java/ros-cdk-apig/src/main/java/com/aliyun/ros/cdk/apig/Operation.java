package com.aliyun.ros.cdk.apig;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::APIG::Operation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:04.225Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.Operation")
public class Operation extends com.aliyun.ros.cdk.core.Resource {

    protected Operation(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Operation(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Operation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.OperationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Operation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.OperationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: The creation timestamp of the operation.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Description: The description of the operation.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Method: The method of http protocol.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMethod() {
        return software.amazon.jsii.Kernel.get(this, "attrMethod", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Mock: Mock configuration.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMock() {
        return software.amazon.jsii.Kernel.get(this, "attrMock", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OperationId: The ID of the operation.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOperationId() {
        return software.amazon.jsii.Kernel.get(this, "attrOperationId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OperationName: The name of the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOperationName() {
        return software.amazon.jsii.Kernel.get(this, "attrOperationName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Path: The interface path of the operation.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPath() {
        return software.amazon.jsii.Kernel.get(this, "attrPath", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.OperationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.OperationProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.OperationProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apig.Operation}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apig.Operation> {
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
        private final com.aliyun.ros.cdk.apig.OperationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apig.OperationProps.Builder();
        }

        /**
         * Property httpApiId: The HTTP API ID to which the interface belongs.
         * <p>
         * @return {@code this}
         * @param httpApiId Property httpApiId: The HTTP API ID to which the interface belongs. This parameter is required.
         */
        public Builder httpApiId(final java.lang.String httpApiId) {
            this.props.httpApiId(httpApiId);
            return this;
        }
        /**
         * Property httpApiId: The HTTP API ID to which the interface belongs.
         * <p>
         * @return {@code this}
         * @param httpApiId Property httpApiId: The HTTP API ID to which the interface belongs. This parameter is required.
         */
        public Builder httpApiId(final com.aliyun.ros.cdk.core.IResolvable httpApiId) {
            this.props.httpApiId(httpApiId);
            return this;
        }

        /**
         * Property method: The method of http protocol.
         * <p>
         * @return {@code this}
         * @param method Property method: The method of http protocol. This parameter is required.
         */
        public Builder method(final java.lang.String method) {
            this.props.method(method);
            return this;
        }
        /**
         * Property method: The method of http protocol.
         * <p>
         * @return {@code this}
         * @param method Property method: The method of http protocol. This parameter is required.
         */
        public Builder method(final com.aliyun.ros.cdk.core.IResolvable method) {
            this.props.method(method);
            return this;
        }

        /**
         * Property operationName: The name of the operation.
         * <p>
         * @return {@code this}
         * @param operationName Property operationName: The name of the operation. This parameter is required.
         */
        public Builder operationName(final java.lang.String operationName) {
            this.props.operationName(operationName);
            return this;
        }
        /**
         * Property operationName: The name of the operation.
         * <p>
         * @return {@code this}
         * @param operationName Property operationName: The name of the operation. This parameter is required.
         */
        public Builder operationName(final com.aliyun.ros.cdk.core.IResolvable operationName) {
            this.props.operationName(operationName);
            return this;
        }

        /**
         * Property path: The interface path of the operation.
         * <p>
         * @return {@code this}
         * @param path Property path: The interface path of the operation. This parameter is required.
         */
        public Builder path(final java.lang.String path) {
            this.props.path(path);
            return this;
        }
        /**
         * Property path: The interface path of the operation.
         * <p>
         * @return {@code this}
         * @param path Property path: The interface path of the operation. This parameter is required.
         */
        public Builder path(final com.aliyun.ros.cdk.core.IResolvable path) {
            this.props.path(path);
            return this;
        }

        /**
         * Property description: The description of the operation.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the operation. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the operation.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the operation. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property mock: Mock configuration.
         * <p>
         * @return {@code this}
         * @param mock Property mock: Mock configuration. This parameter is required.
         */
        public Builder mock(final com.aliyun.ros.cdk.core.IResolvable mock) {
            this.props.mock(mock);
            return this;
        }
        /**
         * Property mock: Mock configuration.
         * <p>
         * @return {@code this}
         * @param mock Property mock: Mock configuration. This parameter is required.
         */
        public Builder mock(final com.aliyun.ros.cdk.apig.RosOperation.MockProperty mock) {
            this.props.mock(mock);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apig.Operation}.
         */
        @Override
        public com.aliyun.ros.cdk.apig.Operation build() {
            return new com.aliyun.ros.cdk.apig.Operation(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
