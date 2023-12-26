package com.aliyun.ros.cdk.alb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ALB::AclAssociation</code>, which is used to associate access control lists (ACLs) with a listener.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:13.669Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.AclAssociation")
public class AclAssociation extends com.aliyun.ros.cdk.core.Resource {

    protected AclAssociation(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AclAssociation(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AclAssociation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.AclAssociationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AclAssociation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.AclAssociationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ListenerId: The ID of the listener.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrListenerId() {
        return software.amazon.jsii.Kernel.get(this, "attrListenerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.alb.AclAssociation}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.alb.AclAssociation> {
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
        private final com.aliyun.ros.cdk.alb.AclAssociationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.alb.AclAssociationProps.Builder();
        }

        /**
         * Property aclIds: The IDs of the ACLs.
         * <p>
         * You can specify up to three IDs at a time.
         * <p>
         * @return {@code this}
         * @param aclIds Property aclIds: The IDs of the ACLs. This parameter is required.
         */
        public Builder aclIds(final com.aliyun.ros.cdk.core.IResolvable aclIds) {
            this.props.aclIds(aclIds);
            return this;
        }
        /**
         * Property aclIds: The IDs of the ACLs.
         * <p>
         * You can specify up to three IDs at a time.
         * <p>
         * @return {@code this}
         * @param aclIds Property aclIds: The IDs of the ACLs. This parameter is required.
         */
        public Builder aclIds(final java.util.List<? extends java.lang.Object> aclIds) {
            this.props.aclIds(aclIds);
            return this;
        }

        /**
         * Property aclType: The type of ACL.
         * <p>
         * @return {@code this}
         * @param aclType Property aclType: The type of ACL. This parameter is required.
         */
        public Builder aclType(final java.lang.String aclType) {
            this.props.aclType(aclType);
            return this;
        }
        /**
         * Property aclType: The type of ACL.
         * <p>
         * @return {@code this}
         * @param aclType Property aclType: The type of ACL. This parameter is required.
         */
        public Builder aclType(final com.aliyun.ros.cdk.core.IResolvable aclType) {
            this.props.aclType(aclType);
            return this;
        }

        /**
         * Property listenerId: The ID of the listener.
         * <p>
         * @return {@code this}
         * @param listenerId Property listenerId: The ID of the listener. This parameter is required.
         */
        public Builder listenerId(final java.lang.String listenerId) {
            this.props.listenerId(listenerId);
            return this;
        }
        /**
         * Property listenerId: The ID of the listener.
         * <p>
         * @return {@code this}
         * @param listenerId Property listenerId: The ID of the listener. This parameter is required.
         */
        public Builder listenerId(final com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.props.listenerId(listenerId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.alb.AclAssociation}.
         */
        @Override
        public com.aliyun.ros.cdk.alb.AclAssociation build() {
            return new com.aliyun.ros.cdk.alb.AclAssociation(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
