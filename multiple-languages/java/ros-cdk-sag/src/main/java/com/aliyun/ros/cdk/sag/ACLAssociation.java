package com.aliyun.ros.cdk.sag;

/**
 * A ROS resource type:  `ALIYUN::SAG::ACLAssociation`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:03.522Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.ACLAssociation")
public class ACLAssociation extends com.aliyun.ros.cdk.core.Resource {

    protected ACLAssociation(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ACLAssociation(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::SAG::ACLAssociation`.
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
    public ACLAssociation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.ACLAssociationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::SAG::ACLAssociation`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ACLAssociation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.ACLAssociationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sag.ACLAssociation}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sag.ACLAssociation> {
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
        private final com.aliyun.ros.cdk.sag.ACLAssociationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sag.ACLAssociationProps.Builder();
        }

        /**
         * Property aclId: Access control ID.
         * <p>
         * @return {@code this}
         * @param aclId Property aclId: Access control ID. This parameter is required.
         */
        public Builder aclId(final java.lang.String aclId) {
            this.props.aclId(aclId);
            return this;
        }
        /**
         * Property aclId: Access control ID.
         * <p>
         * @return {@code this}
         * @param aclId Property aclId: Access control ID. This parameter is required.
         */
        public Builder aclId(final com.aliyun.ros.cdk.core.IResolvable aclId) {
            this.props.aclId(aclId);
            return this;
        }

        /**
         * Property smartAgId: An intelligent gateway instance that needs to bind access control.
         * <p>
         * @return {@code this}
         * @param smartAgId Property smartAgId: An intelligent gateway instance that needs to bind access control. This parameter is required.
         */
        public Builder smartAgId(final java.lang.String smartAgId) {
            this.props.smartAgId(smartAgId);
            return this;
        }
        /**
         * Property smartAgId: An intelligent gateway instance that needs to bind access control.
         * <p>
         * @return {@code this}
         * @param smartAgId Property smartAgId: An intelligent gateway instance that needs to bind access control. This parameter is required.
         */
        public Builder smartAgId(final com.aliyun.ros.cdk.core.IResolvable smartAgId) {
            this.props.smartAgId(smartAgId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.sag.ACLAssociation}.
         */
        @Override
        public com.aliyun.ros.cdk.sag.ACLAssociation build() {
            return new com.aliyun.ros.cdk.sag.ACLAssociation(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
