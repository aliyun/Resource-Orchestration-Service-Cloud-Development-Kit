package com.aliyun.ros.cdk.servicecatalog;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ServiceCatalog::Constraint</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:53:18.319Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.servicecatalog.$Module.class, fqn = "@alicloud/ros-cdk-servicecatalog.Constraint")
public class Constraint extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.servicecatalog.IConstraint {

    protected Constraint(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Constraint(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Constraint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.servicecatalog.ConstraintProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Constraint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.servicecatalog.ConstraintProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConstraintId: The ID of the constraint.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConstraintId() {
        return software.amazon.jsii.Kernel.get(this, "attrConstraintId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.servicecatalog.ConstraintProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.servicecatalog.ConstraintProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.servicecatalog.Constraint}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.servicecatalog.Constraint> {
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
        private final com.aliyun.ros.cdk.servicecatalog.ConstraintProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.servicecatalog.ConstraintProps.Builder();
        }

        /**
         * Property config: The configuration of the constraint.
         * <p>
         * @return {@code this}
         * @param config Property config: The configuration of the constraint. This parameter is required.
         */
        public Builder config(final java.util.Map<java.lang.String, ? extends java.lang.Object> config) {
            this.props.config(config);
            return this;
        }
        /**
         * Property config: The configuration of the constraint.
         * <p>
         * @return {@code this}
         * @param config Property config: The configuration of the constraint. This parameter is required.
         */
        public Builder config(final com.aliyun.ros.cdk.core.IResolvable config) {
            this.props.config(config);
            return this;
        }

        /**
         * Property constraintType: The type of the constraint.
         * <p>
         * @return {@code this}
         * @param constraintType Property constraintType: The type of the constraint. This parameter is required.
         */
        public Builder constraintType(final java.lang.String constraintType) {
            this.props.constraintType(constraintType);
            return this;
        }
        /**
         * Property constraintType: The type of the constraint.
         * <p>
         * @return {@code this}
         * @param constraintType Property constraintType: The type of the constraint. This parameter is required.
         */
        public Builder constraintType(final com.aliyun.ros.cdk.core.IResolvable constraintType) {
            this.props.constraintType(constraintType);
            return this;
        }

        /**
         * Property portfolioId: The ID of the portfolio.
         * <p>
         * @return {@code this}
         * @param portfolioId Property portfolioId: The ID of the portfolio. This parameter is required.
         */
        public Builder portfolioId(final java.lang.String portfolioId) {
            this.props.portfolioId(portfolioId);
            return this;
        }
        /**
         * Property portfolioId: The ID of the portfolio.
         * <p>
         * @return {@code this}
         * @param portfolioId Property portfolioId: The ID of the portfolio. This parameter is required.
         */
        public Builder portfolioId(final com.aliyun.ros.cdk.core.IResolvable portfolioId) {
            this.props.portfolioId(portfolioId);
            return this;
        }

        /**
         * Property productId: The ID of the product.
         * <p>
         * @return {@code this}
         * @param productId Property productId: The ID of the product. This parameter is required.
         */
        public Builder productId(final java.lang.String productId) {
            this.props.productId(productId);
            return this;
        }
        /**
         * Property productId: The ID of the product.
         * <p>
         * @return {@code this}
         * @param productId Property productId: The ID of the product. This parameter is required.
         */
        public Builder productId(final com.aliyun.ros.cdk.core.IResolvable productId) {
            this.props.productId(productId);
            return this;
        }

        /**
         * Property description: The description of the constraint.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the constraint. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the constraint.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the constraint. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.servicecatalog.Constraint}.
         */
        @Override
        public com.aliyun.ros.cdk.servicecatalog.Constraint build() {
            return new com.aliyun.ros.cdk.servicecatalog.Constraint(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
