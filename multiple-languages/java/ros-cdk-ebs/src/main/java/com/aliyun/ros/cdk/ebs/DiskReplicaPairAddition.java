package com.aliyun.ros.cdk.ebs;

/**
 * A ROS resource type:  <code>ALIYUN::EBS::DiskReplicaPairAddition</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:45.311Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ebs.$Module.class, fqn = "@alicloud/ros-cdk-ebs.DiskReplicaPairAddition")
public class DiskReplicaPairAddition extends com.aliyun.ros.cdk.core.Resource {

    protected DiskReplicaPairAddition(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DiskReplicaPairAddition(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::EBS::DiskReplicaPairAddition</code>.
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
    public DiskReplicaPairAddition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.DiskReplicaPairAdditionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::EBS::DiskReplicaPairAddition</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DiskReplicaPairAddition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.DiskReplicaPairAdditionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ReplicaGroupId: The ID of the replication pair-consistent group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReplicaGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrReplicaGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ReplicaPairId: The ID of the replication pair.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReplicaPairId() {
        return software.amazon.jsii.Kernel.get(this, "attrReplicaPairId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ebs.DiskReplicaPairAddition}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ebs.DiskReplicaPairAddition> {
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
        private final com.aliyun.ros.cdk.ebs.DiskReplicaPairAdditionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ebs.DiskReplicaPairAdditionProps.Builder();
        }

        /**
         * Property replicaGroupId: The ID of the replication pair-consistent group.
         * <p>
         * @return {@code this}
         * @param replicaGroupId Property replicaGroupId: The ID of the replication pair-consistent group. This parameter is required.
         */
        public Builder replicaGroupId(final java.lang.String replicaGroupId) {
            this.props.replicaGroupId(replicaGroupId);
            return this;
        }
        /**
         * Property replicaGroupId: The ID of the replication pair-consistent group.
         * <p>
         * @return {@code this}
         * @param replicaGroupId Property replicaGroupId: The ID of the replication pair-consistent group. This parameter is required.
         */
        public Builder replicaGroupId(final com.aliyun.ros.cdk.core.IResolvable replicaGroupId) {
            this.props.replicaGroupId(replicaGroupId);
            return this;
        }

        /**
         * Property replicaPairId: The ID of the replication pair.
         * <p>
         * You can call the DescribeDiskReplicaPairs operation to query the IDs of existing replication pairs.
         * <p>
         * @return {@code this}
         * @param replicaPairId Property replicaPairId: The ID of the replication pair. This parameter is required.
         */
        public Builder replicaPairId(final java.lang.String replicaPairId) {
            this.props.replicaPairId(replicaPairId);
            return this;
        }
        /**
         * Property replicaPairId: The ID of the replication pair.
         * <p>
         * You can call the DescribeDiskReplicaPairs operation to query the IDs of existing replication pairs.
         * <p>
         * @return {@code this}
         * @param replicaPairId Property replicaPairId: The ID of the replication pair. This parameter is required.
         */
        public Builder replicaPairId(final com.aliyun.ros.cdk.core.IResolvable replicaPairId) {
            this.props.replicaPairId(replicaPairId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ebs.DiskReplicaPairAddition}.
         */
        @Override
        public com.aliyun.ros.cdk.ebs.DiskReplicaPairAddition build() {
            return new com.aliyun.ros.cdk.ebs.DiskReplicaPairAddition(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
