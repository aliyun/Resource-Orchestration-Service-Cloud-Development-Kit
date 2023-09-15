package com.aliyun.ros.cdk.paidlc;

/**
 * A ROS resource type:  <code>ALIYUN::PAIDLC::Tensorboard</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:49.637Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paidlc.$Module.class, fqn = "@alicloud/ros-cdk-paidlc.Tensorboard")
public class Tensorboard extends com.aliyun.ros.cdk.core.Resource {

    protected Tensorboard(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Tensorboard(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::PAIDLC::Tensorboard</code>.
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
    public Tensorboard(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paidlc.TensorboardProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::PAIDLC::Tensorboard</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Tensorboard(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paidlc.TensorboardProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute TensorboardId: Tensorboard id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTensorboardId() {
        return software.amazon.jsii.Kernel.get(this, "attrTensorboardId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TensorboardUrl: Tensorboard url.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTensorboardUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrTensorboardUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.paidlc.Tensorboard}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.paidlc.Tensorboard> {
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
        private final com.aliyun.ros.cdk.paidlc.TensorboardProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.paidlc.TensorboardProps.Builder();
        }

        /**
         * Property dataSourceId: For dataset ID, see the data set ID, see ListDataSets.
         * <p>
         * @return {@code this}
         * @param dataSourceId Property dataSourceId: For dataset ID, see the data set ID, see ListDataSets. This parameter is required.
         */
        public Builder dataSourceId(final java.lang.String dataSourceId) {
            this.props.dataSourceId(dataSourceId);
            return this;
        }
        /**
         * Property dataSourceId: For dataset ID, see the data set ID, see ListDataSets.
         * <p>
         * @return {@code this}
         * @param dataSourceId Property dataSourceId: For dataset ID, see the data set ID, see ListDataSets. This parameter is required.
         */
        public Builder dataSourceId(final com.aliyun.ros.cdk.core.IResolvable dataSourceId) {
            this.props.dataSourceId(dataSourceId);
            return this;
        }

        /**
         * Property displayName: Tensorboard name.
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: Tensorboard name. This parameter is required.
         */
        public Builder displayName(final java.lang.String displayName) {
            this.props.displayName(displayName);
            return this;
        }
        /**
         * Property displayName: Tensorboard name.
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: Tensorboard name. This parameter is required.
         */
        public Builder displayName(final com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.props.displayName(displayName);
            return this;
        }

        /**
         * Property workspaceId: Work space ID.How to get working space ID, see ListworkSpaces.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: Work space ID.How to get working space ID, see ListworkSpaces. This parameter is required.
         */
        public Builder workspaceId(final java.lang.String workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }
        /**
         * Property workspaceId: Work space ID.How to get working space ID, see ListworkSpaces.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: Work space ID.How to get working space ID, see ListworkSpaces. This parameter is required.
         */
        public Builder workspaceId(final com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }

        /**
         * Property cpu: CPU nuclear number.
         * <p>
         * @return {@code this}
         * @param cpu Property cpu: CPU nuclear number. This parameter is required.
         */
        public Builder cpu(final java.lang.Number cpu) {
            this.props.cpu(cpu);
            return this;
        }
        /**
         * Property cpu: CPU nuclear number.
         * <p>
         * @return {@code this}
         * @param cpu Property cpu: CPU nuclear number. This parameter is required.
         */
        public Builder cpu(final com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.props.cpu(cpu);
            return this;
        }

        /**
         * Property dataSources: Data source configuration.
         * <p>
         * @return {@code this}
         * @param dataSources Property dataSources: Data source configuration. This parameter is required.
         */
        public Builder dataSources(final java.util.List<? extends java.lang.Object> dataSources) {
            this.props.dataSources(dataSources);
            return this;
        }
        /**
         * Property dataSources: Data source configuration.
         * <p>
         * @return {@code this}
         * @param dataSources Property dataSources: Data source configuration. This parameter is required.
         */
        public Builder dataSources(final com.aliyun.ros.cdk.core.IResolvable dataSources) {
            this.props.dataSources(dataSources);
            return this;
        }

        /**
         * Property dataSourceType: The type of dataset.
         * <p>
         * Values: OSS,NAS
         * <p>
         * @return {@code this}
         * @param dataSourceType Property dataSourceType: The type of dataset. This parameter is required.
         */
        public Builder dataSourceType(final java.lang.String dataSourceType) {
            this.props.dataSourceType(dataSourceType);
            return this;
        }
        /**
         * Property dataSourceType: The type of dataset.
         * <p>
         * Values: OSS,NAS
         * <p>
         * @return {@code this}
         * @param dataSourceType Property dataSourceType: The type of dataset. This parameter is required.
         */
        public Builder dataSourceType(final com.aliyun.ros.cdk.core.IResolvable dataSourceType) {
            this.props.dataSourceType(dataSourceType);
            return this;
        }

        /**
         * Property jobId: Task ID.How to get the task ID, see Listjobs.
         * <p>
         * @return {@code this}
         * @param jobId Property jobId: Task ID.How to get the task ID, see Listjobs. This parameter is required.
         */
        public Builder jobId(final java.lang.String jobId) {
            this.props.jobId(jobId);
            return this;
        }
        /**
         * Property jobId: Task ID.How to get the task ID, see Listjobs.
         * <p>
         * @return {@code this}
         * @param jobId Property jobId: Task ID.How to get the task ID, see Listjobs. This parameter is required.
         */
        public Builder jobId(final com.aliyun.ros.cdk.core.IResolvable jobId) {
            this.props.jobId(jobId);
            return this;
        }

        /**
         * Property maxRunningTimeMinutes: The longest running time, the unit is: minutes.
         * <p>
         * @return {@code this}
         * @param maxRunningTimeMinutes Property maxRunningTimeMinutes: The longest running time, the unit is: minutes. This parameter is required.
         */
        public Builder maxRunningTimeMinutes(final java.lang.Number maxRunningTimeMinutes) {
            this.props.maxRunningTimeMinutes(maxRunningTimeMinutes);
            return this;
        }
        /**
         * Property maxRunningTimeMinutes: The longest running time, the unit is: minutes.
         * <p>
         * @return {@code this}
         * @param maxRunningTimeMinutes Property maxRunningTimeMinutes: The longest running time, the unit is: minutes. This parameter is required.
         */
        public Builder maxRunningTimeMinutes(final com.aliyun.ros.cdk.core.IResolvable maxRunningTimeMinutes) {
            this.props.maxRunningTimeMinutes(maxRunningTimeMinutes);
            return this;
        }

        /**
         * Property memory: Memory size, the unit is: GB.
         * <p>
         * @return {@code this}
         * @param memory Property memory: Memory size, the unit is: GB. This parameter is required.
         */
        public Builder memory(final java.lang.Number memory) {
            this.props.memory(memory);
            return this;
        }
        /**
         * Property memory: Memory size, the unit is: GB.
         * <p>
         * @return {@code this}
         * @param memory Property memory: Memory size, the unit is: GB. This parameter is required.
         */
        public Builder memory(final com.aliyun.ros.cdk.core.IResolvable memory) {
            this.props.memory(memory);
            return this;
        }

        /**
         * Property options: The expansion field of the dataset is JSON format, which currently supports Mountpath: the path of custom dataset mounting.
         * <p>
         * @return {@code this}
         * @param options Property options: The expansion field of the dataset is JSON format, which currently supports Mountpath: the path of custom dataset mounting. This parameter is required.
         */
        public Builder options(final java.lang.String options) {
            this.props.options(options);
            return this;
        }
        /**
         * Property options: The expansion field of the dataset is JSON format, which currently supports Mountpath: the path of custom dataset mounting.
         * <p>
         * @return {@code this}
         * @param options Property options: The expansion field of the dataset is JSON format, which currently supports Mountpath: the path of custom dataset mounting. This parameter is required.
         */
        public Builder options(final com.aliyun.ros.cdk.core.IResolvable options) {
            this.props.options(options);
            return this;
        }

        /**
         * Property sourceId: Source ID.
         * <p>
         * @return {@code this}
         * @param sourceId Property sourceId: Source ID. This parameter is required.
         */
        public Builder sourceId(final java.lang.String sourceId) {
            this.props.sourceId(sourceId);
            return this;
        }
        /**
         * Property sourceId: Source ID.
         * <p>
         * @return {@code this}
         * @param sourceId Property sourceId: Source ID. This parameter is required.
         */
        public Builder sourceId(final com.aliyun.ros.cdk.core.IResolvable sourceId) {
            this.props.sourceId(sourceId);
            return this;
        }

        /**
         * Property sourceType: Source type.
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: Source type. This parameter is required.
         */
        public Builder sourceType(final java.lang.String sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }
        /**
         * Property sourceType: Source type.
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: Source type. This parameter is required.
         */
        public Builder sourceType(final com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }

        /**
         * Property summaryPath: Summary directory.
         * <p>
         * @return {@code this}
         * @param summaryPath Property summaryPath: Summary directory. This parameter is required.
         */
        public Builder summaryPath(final java.lang.String summaryPath) {
            this.props.summaryPath(summaryPath);
            return this;
        }
        /**
         * Property summaryPath: Summary directory.
         * <p>
         * @return {@code this}
         * @param summaryPath Property summaryPath: Summary directory. This parameter is required.
         */
        public Builder summaryPath(final com.aliyun.ros.cdk.core.IResolvable summaryPath) {
            this.props.summaryPath(summaryPath);
            return this;
        }

        /**
         * Property summaryRelativePath: Summary relative directory.
         * <p>
         * Summary relative directory and Summary directory are mutually exclusive
         * <p>
         * @return {@code this}
         * @param summaryRelativePath Property summaryRelativePath: Summary relative directory. This parameter is required.
         */
        public Builder summaryRelativePath(final java.lang.String summaryRelativePath) {
            this.props.summaryRelativePath(summaryRelativePath);
            return this;
        }
        /**
         * Property summaryRelativePath: Summary relative directory.
         * <p>
         * Summary relative directory and Summary directory are mutually exclusive
         * <p>
         * @return {@code this}
         * @param summaryRelativePath Property summaryRelativePath: Summary relative directory. This parameter is required.
         */
        public Builder summaryRelativePath(final com.aliyun.ros.cdk.core.IResolvable summaryRelativePath) {
            this.props.summaryRelativePath(summaryRelativePath);
            return this;
        }

        /**
         * Property uri: URI of a dataset: When DataSourceType is OSS, the format is: OSS: // [OSS-BUCET].
         * <p>
         * [Endpoint]/[Path].
         * When the DataSourceType is NAS, the format is: nas:// [nas-filesystem-id]. [Region]/[PATH].
         * <p>
         * @return {@code this}
         * @param uri Property uri: URI of a dataset: When DataSourceType is OSS, the format is: OSS: // [OSS-BUCET]. This parameter is required.
         */
        public Builder uri(final java.lang.String uri) {
            this.props.uri(uri);
            return this;
        }
        /**
         * Property uri: URI of a dataset: When DataSourceType is OSS, the format is: OSS: // [OSS-BUCET].
         * <p>
         * [Endpoint]/[Path].
         * When the DataSourceType is NAS, the format is: nas:// [nas-filesystem-id]. [Region]/[PATH].
         * <p>
         * @return {@code this}
         * @param uri Property uri: URI of a dataset: When DataSourceType is OSS, the format is: OSS: // [OSS-BUCET]. This parameter is required.
         */
        public Builder uri(final com.aliyun.ros.cdk.core.IResolvable uri) {
            this.props.uri(uri);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.paidlc.Tensorboard}.
         */
        @Override
        public com.aliyun.ros.cdk.paidlc.Tensorboard build() {
            return new com.aliyun.ros.cdk.paidlc.Tensorboard(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
