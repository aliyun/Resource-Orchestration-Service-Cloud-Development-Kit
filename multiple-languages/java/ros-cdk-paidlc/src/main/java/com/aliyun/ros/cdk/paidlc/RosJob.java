package com.aliyun.ros.cdk.paidlc;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::PAIDLC::Job</code>, which is used to create a Machine Learning Platform for AI (PAI) job to run in a cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:17.189Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paidlc.$Module.class, fqn = "@alicloud/ros-cdk-paidlc.RosJob")
public class RosJob extends com.aliyun.ros.cdk.core.RosResource {

    protected RosJob(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosJob(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.paidlc.RosJob.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paidlc.RosJobProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrJobId() {
        return software.amazon.jsii.Kernel.get(this, "attrJobId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDisplayName() {
        return software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDisplayName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "displayName", java.util.Objects.requireNonNull(value, "displayName is required"));
    }

    /**
     */
    public void setDisplayName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "displayName", java.util.Objects.requireNonNull(value, "displayName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getJobSpecs() {
        return software.amazon.jsii.Kernel.get(this, "jobSpecs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setJobSpecs(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "jobSpecs", java.util.Objects.requireNonNull(value, "jobSpecs is required"));
    }

    /**
     */
    public void setJobSpecs(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.paidlc.RosJob.JobSpecsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.paidlc.RosJob.JobSpecsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "jobSpecs", java.util.Objects.requireNonNull(value, "jobSpecs is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getJobType() {
        return software.amazon.jsii.Kernel.get(this, "jobType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setJobType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "jobType", java.util.Objects.requireNonNull(value, "jobType is required"));
    }

    /**
     */
    public void setJobType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "jobType", java.util.Objects.requireNonNull(value, "jobType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getUserCommand() {
        return software.amazon.jsii.Kernel.get(this, "userCommand", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUserCommand(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "userCommand", java.util.Objects.requireNonNull(value, "userCommand is required"));
    }

    /**
     */
    public void setUserCommand(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "userCommand", java.util.Objects.requireNonNull(value, "userCommand is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceId() {
        return software.amazon.jsii.Kernel.get(this, "workspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkspaceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "workspaceId", java.util.Objects.requireNonNull(value, "workspaceId is required"));
    }

    /**
     */
    public void setWorkspaceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workspaceId", java.util.Objects.requireNonNull(value, "workspaceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCodeSource() {
        return software.amazon.jsii.Kernel.get(this, "codeSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCodeSource(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "codeSource", value);
    }

    /**
     */
    public void setCodeSource(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.paidlc.RosJob.CodeSourceProperty value) {
        software.amazon.jsii.Kernel.set(this, "codeSource", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDataSources() {
        return software.amazon.jsii.Kernel.get(this, "dataSources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataSources(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataSources", value);
    }

    /**
     */
    public void setDataSources(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.paidlc.RosJob.DataSourcesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.paidlc.RosJob.DataSourcesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "dataSources", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnvs() {
        return software.amazon.jsii.Kernel.get(this, "envs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnvs(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "envs", value);
    }

    /**
     */
    public void setEnvs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "envs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getJobMaxRunningTimeMinutes() {
        return software.amazon.jsii.Kernel.get(this, "jobMaxRunningTimeMinutes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setJobMaxRunningTimeMinutes(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "jobMaxRunningTimeMinutes", value);
    }

    /**
     */
    public void setJobMaxRunningTimeMinutes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "jobMaxRunningTimeMinutes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOptions() {
        return software.amazon.jsii.Kernel.get(this, "options", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOptions(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "options", value);
    }

    /**
     */
    public void setOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "options", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
        return software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "priority", value);
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "priority", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceId() {
        return software.amazon.jsii.Kernel.get(this, "resourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceId", value);
    }

    /**
     */
    public void setResourceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSettings() {
        return software.amazon.jsii.Kernel.get(this, "settings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSettings(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "settings", value);
    }

    /**
     */
    public void setSettings(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "settings", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSuccessPolicy() {
        return software.amazon.jsii.Kernel.get(this, "successPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSuccessPolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "successPolicy", value);
    }

    /**
     */
    public void setSuccessPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "successPolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getThirdpartyLibDir() {
        return software.amazon.jsii.Kernel.get(this, "thirdpartyLibDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setThirdpartyLibDir(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "thirdpartyLibDir", value);
    }

    /**
     */
    public void setThirdpartyLibDir(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "thirdpartyLibDir", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getThirdpartyLibs() {
        return software.amazon.jsii.Kernel.get(this, "thirdpartyLibs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setThirdpartyLibs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "thirdpartyLibs", value);
    }

    /**
     */
    public void setThirdpartyLibs(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "thirdpartyLibs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUserVpc() {
        return software.amazon.jsii.Kernel.get(this, "userVpc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUserVpc(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "userVpc", value);
    }

    /**
     */
    public void setUserVpc(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.paidlc.RosJob.UserVpcProperty value) {
        software.amazon.jsii.Kernel.set(this, "userVpc", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paidlc.$Module.class, fqn = "@alicloud/ros-cdk-paidlc.RosJob.CodeSourceProperty")
    @software.amazon.jsii.Jsii.Proxy(CodeSourceProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CodeSourceProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCodeSourceId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBranch() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCommit() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMountPath() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CodeSourceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CodeSourceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CodeSourceProperty> {
            java.lang.Object codeSourceId;
            java.lang.Object branch;
            java.lang.Object commit;
            java.lang.Object mountPath;

            /**
             * Sets the value of {@link CodeSourceProperty#getCodeSourceId}
             * @param codeSourceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder codeSourceId(java.lang.String codeSourceId) {
                this.codeSourceId = codeSourceId;
                return this;
            }

            /**
             * Sets the value of {@link CodeSourceProperty#getCodeSourceId}
             * @param codeSourceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder codeSourceId(com.aliyun.ros.cdk.core.IResolvable codeSourceId) {
                this.codeSourceId = codeSourceId;
                return this;
            }

            /**
             * Sets the value of {@link CodeSourceProperty#getBranch}
             * @param branch the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder branch(java.lang.String branch) {
                this.branch = branch;
                return this;
            }

            /**
             * Sets the value of {@link CodeSourceProperty#getBranch}
             * @param branch the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder branch(com.aliyun.ros.cdk.core.IResolvable branch) {
                this.branch = branch;
                return this;
            }

            /**
             * Sets the value of {@link CodeSourceProperty#getCommit}
             * @param commit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder commit(java.lang.String commit) {
                this.commit = commit;
                return this;
            }

            /**
             * Sets the value of {@link CodeSourceProperty#getCommit}
             * @param commit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder commit(com.aliyun.ros.cdk.core.IResolvable commit) {
                this.commit = commit;
                return this;
            }

            /**
             * Sets the value of {@link CodeSourceProperty#getMountPath}
             * @param mountPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPath(java.lang.String mountPath) {
                this.mountPath = mountPath;
                return this;
            }

            /**
             * Sets the value of {@link CodeSourceProperty#getMountPath}
             * @param mountPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPath(com.aliyun.ros.cdk.core.IResolvable mountPath) {
                this.mountPath = mountPath;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CodeSourceProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CodeSourceProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CodeSourceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CodeSourceProperty {
            private final java.lang.Object codeSourceId;
            private final java.lang.Object branch;
            private final java.lang.Object commit;
            private final java.lang.Object mountPath;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.codeSourceId = software.amazon.jsii.Kernel.get(this, "codeSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.branch = software.amazon.jsii.Kernel.get(this, "branch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.commit = software.amazon.jsii.Kernel.get(this, "commit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mountPath = software.amazon.jsii.Kernel.get(this, "mountPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.codeSourceId = java.util.Objects.requireNonNull(builder.codeSourceId, "codeSourceId is required");
                this.branch = builder.branch;
                this.commit = builder.commit;
                this.mountPath = builder.mountPath;
            }

            @Override
            public final java.lang.Object getCodeSourceId() {
                return this.codeSourceId;
            }

            @Override
            public final java.lang.Object getBranch() {
                return this.branch;
            }

            @Override
            public final java.lang.Object getCommit() {
                return this.commit;
            }

            @Override
            public final java.lang.Object getMountPath() {
                return this.mountPath;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("codeSourceId", om.valueToTree(this.getCodeSourceId()));
                if (this.getBranch() != null) {
                    data.set("branch", om.valueToTree(this.getBranch()));
                }
                if (this.getCommit() != null) {
                    data.set("commit", om.valueToTree(this.getCommit()));
                }
                if (this.getMountPath() != null) {
                    data.set("mountPath", om.valueToTree(this.getMountPath()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-paidlc.RosJob.CodeSourceProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CodeSourceProperty.Jsii$Proxy that = (CodeSourceProperty.Jsii$Proxy) o;

                if (!codeSourceId.equals(that.codeSourceId)) return false;
                if (this.branch != null ? !this.branch.equals(that.branch) : that.branch != null) return false;
                if (this.commit != null ? !this.commit.equals(that.commit) : that.commit != null) return false;
                return this.mountPath != null ? this.mountPath.equals(that.mountPath) : that.mountPath == null;
            }

            @Override
            public final int hashCode() {
                int result = this.codeSourceId.hashCode();
                result = 31 * result + (this.branch != null ? this.branch.hashCode() : 0);
                result = 31 * result + (this.commit != null ? this.commit.hashCode() : 0);
                result = 31 * result + (this.mountPath != null ? this.mountPath.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paidlc.$Module.class, fqn = "@alicloud/ros-cdk-paidlc.RosJob.DataSourcesProperty")
    @software.amazon.jsii.Jsii.Proxy(DataSourcesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DataSourcesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDataSourceId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMountPath() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DataSourcesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DataSourcesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DataSourcesProperty> {
            java.lang.Object dataSourceId;
            java.lang.Object mountPath;

            /**
             * Sets the value of {@link DataSourcesProperty#getDataSourceId}
             * @param dataSourceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataSourceId(java.lang.String dataSourceId) {
                this.dataSourceId = dataSourceId;
                return this;
            }

            /**
             * Sets the value of {@link DataSourcesProperty#getDataSourceId}
             * @param dataSourceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataSourceId(com.aliyun.ros.cdk.core.IResolvable dataSourceId) {
                this.dataSourceId = dataSourceId;
                return this;
            }

            /**
             * Sets the value of {@link DataSourcesProperty#getMountPath}
             * @param mountPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPath(java.lang.String mountPath) {
                this.mountPath = mountPath;
                return this;
            }

            /**
             * Sets the value of {@link DataSourcesProperty#getMountPath}
             * @param mountPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPath(com.aliyun.ros.cdk.core.IResolvable mountPath) {
                this.mountPath = mountPath;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DataSourcesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DataSourcesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DataSourcesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DataSourcesProperty {
            private final java.lang.Object dataSourceId;
            private final java.lang.Object mountPath;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.dataSourceId = software.amazon.jsii.Kernel.get(this, "dataSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mountPath = software.amazon.jsii.Kernel.get(this, "mountPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.dataSourceId = java.util.Objects.requireNonNull(builder.dataSourceId, "dataSourceId is required");
                this.mountPath = builder.mountPath;
            }

            @Override
            public final java.lang.Object getDataSourceId() {
                return this.dataSourceId;
            }

            @Override
            public final java.lang.Object getMountPath() {
                return this.mountPath;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("dataSourceId", om.valueToTree(this.getDataSourceId()));
                if (this.getMountPath() != null) {
                    data.set("mountPath", om.valueToTree(this.getMountPath()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-paidlc.RosJob.DataSourcesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DataSourcesProperty.Jsii$Proxy that = (DataSourcesProperty.Jsii$Proxy) o;

                if (!dataSourceId.equals(that.dataSourceId)) return false;
                return this.mountPath != null ? this.mountPath.equals(that.mountPath) : that.mountPath == null;
            }

            @Override
            public final int hashCode() {
                int result = this.dataSourceId.hashCode();
                result = 31 * result + (this.mountPath != null ? this.mountPath.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paidlc.$Module.class, fqn = "@alicloud/ros-cdk-paidlc.RosJob.JobSpecsProperty")
    @software.amazon.jsii.Jsii.Proxy(JobSpecsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface JobSpecsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEcsSpec();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getImage();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPodCount();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getUseSpotInstance();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExtraPodSpec() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getImageConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResourceConfig() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link JobSpecsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link JobSpecsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<JobSpecsProperty> {
            java.lang.Object ecsSpec;
            java.lang.Object image;
            java.lang.Object podCount;
            java.lang.Object type;
            java.lang.Object useSpotInstance;
            java.lang.Object extraPodSpec;
            java.lang.Object imageConfig;
            java.lang.Object resourceConfig;

            /**
             * Sets the value of {@link JobSpecsProperty#getEcsSpec}
             * @param ecsSpec the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ecsSpec(java.lang.String ecsSpec) {
                this.ecsSpec = ecsSpec;
                return this;
            }

            /**
             * Sets the value of {@link JobSpecsProperty#getEcsSpec}
             * @param ecsSpec the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ecsSpec(com.aliyun.ros.cdk.core.IResolvable ecsSpec) {
                this.ecsSpec = ecsSpec;
                return this;
            }

            /**
             * Sets the value of {@link JobSpecsProperty#getImage}
             * @param image the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder image(java.lang.String image) {
                this.image = image;
                return this;
            }

            /**
             * Sets the value of {@link JobSpecsProperty#getImage}
             * @param image the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder image(com.aliyun.ros.cdk.core.IResolvable image) {
                this.image = image;
                return this;
            }

            /**
             * Sets the value of {@link JobSpecsProperty#getPodCount}
             * @param podCount the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder podCount(java.lang.Number podCount) {
                this.podCount = podCount;
                return this;
            }

            /**
             * Sets the value of {@link JobSpecsProperty#getPodCount}
             * @param podCount the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder podCount(com.aliyun.ros.cdk.core.IResolvable podCount) {
                this.podCount = podCount;
                return this;
            }

            /**
             * Sets the value of {@link JobSpecsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link JobSpecsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link JobSpecsProperty#getUseSpotInstance}
             * @param useSpotInstance the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder useSpotInstance(java.lang.Boolean useSpotInstance) {
                this.useSpotInstance = useSpotInstance;
                return this;
            }

            /**
             * Sets the value of {@link JobSpecsProperty#getUseSpotInstance}
             * @param useSpotInstance the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder useSpotInstance(com.aliyun.ros.cdk.core.IResolvable useSpotInstance) {
                this.useSpotInstance = useSpotInstance;
                return this;
            }

            /**
             * Sets the value of {@link JobSpecsProperty#getExtraPodSpec}
             * @param extraPodSpec the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder extraPodSpec(com.aliyun.ros.cdk.core.IResolvable extraPodSpec) {
                this.extraPodSpec = extraPodSpec;
                return this;
            }

            /**
             * Sets the value of {@link JobSpecsProperty#getExtraPodSpec}
             * @param extraPodSpec the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder extraPodSpec(java.util.Map<java.lang.String, ? extends java.lang.Object> extraPodSpec) {
                this.extraPodSpec = extraPodSpec;
                return this;
            }

            /**
             * Sets the value of {@link JobSpecsProperty#getImageConfig}
             * @param imageConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageConfig(com.aliyun.ros.cdk.core.IResolvable imageConfig) {
                this.imageConfig = imageConfig;
                return this;
            }

            /**
             * Sets the value of {@link JobSpecsProperty#getImageConfig}
             * @param imageConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> imageConfig) {
                this.imageConfig = imageConfig;
                return this;
            }

            /**
             * Sets the value of {@link JobSpecsProperty#getResourceConfig}
             * @param resourceConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceConfig(com.aliyun.ros.cdk.core.IResolvable resourceConfig) {
                this.resourceConfig = resourceConfig;
                return this;
            }

            /**
             * Sets the value of {@link JobSpecsProperty#getResourceConfig}
             * @param resourceConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> resourceConfig) {
                this.resourceConfig = resourceConfig;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link JobSpecsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public JobSpecsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link JobSpecsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements JobSpecsProperty {
            private final java.lang.Object ecsSpec;
            private final java.lang.Object image;
            private final java.lang.Object podCount;
            private final java.lang.Object type;
            private final java.lang.Object useSpotInstance;
            private final java.lang.Object extraPodSpec;
            private final java.lang.Object imageConfig;
            private final java.lang.Object resourceConfig;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ecsSpec = software.amazon.jsii.Kernel.get(this, "ecsSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.image = software.amazon.jsii.Kernel.get(this, "image", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.podCount = software.amazon.jsii.Kernel.get(this, "podCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.useSpotInstance = software.amazon.jsii.Kernel.get(this, "useSpotInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.extraPodSpec = software.amazon.jsii.Kernel.get(this, "extraPodSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.imageConfig = software.amazon.jsii.Kernel.get(this, "imageConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resourceConfig = software.amazon.jsii.Kernel.get(this, "resourceConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ecsSpec = java.util.Objects.requireNonNull(builder.ecsSpec, "ecsSpec is required");
                this.image = java.util.Objects.requireNonNull(builder.image, "image is required");
                this.podCount = java.util.Objects.requireNonNull(builder.podCount, "podCount is required");
                this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
                this.useSpotInstance = java.util.Objects.requireNonNull(builder.useSpotInstance, "useSpotInstance is required");
                this.extraPodSpec = builder.extraPodSpec;
                this.imageConfig = builder.imageConfig;
                this.resourceConfig = builder.resourceConfig;
            }

            @Override
            public final java.lang.Object getEcsSpec() {
                return this.ecsSpec;
            }

            @Override
            public final java.lang.Object getImage() {
                return this.image;
            }

            @Override
            public final java.lang.Object getPodCount() {
                return this.podCount;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getUseSpotInstance() {
                return this.useSpotInstance;
            }

            @Override
            public final java.lang.Object getExtraPodSpec() {
                return this.extraPodSpec;
            }

            @Override
            public final java.lang.Object getImageConfig() {
                return this.imageConfig;
            }

            @Override
            public final java.lang.Object getResourceConfig() {
                return this.resourceConfig;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("ecsSpec", om.valueToTree(this.getEcsSpec()));
                data.set("image", om.valueToTree(this.getImage()));
                data.set("podCount", om.valueToTree(this.getPodCount()));
                data.set("type", om.valueToTree(this.getType()));
                data.set("useSpotInstance", om.valueToTree(this.getUseSpotInstance()));
                if (this.getExtraPodSpec() != null) {
                    data.set("extraPodSpec", om.valueToTree(this.getExtraPodSpec()));
                }
                if (this.getImageConfig() != null) {
                    data.set("imageConfig", om.valueToTree(this.getImageConfig()));
                }
                if (this.getResourceConfig() != null) {
                    data.set("resourceConfig", om.valueToTree(this.getResourceConfig()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-paidlc.RosJob.JobSpecsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                JobSpecsProperty.Jsii$Proxy that = (JobSpecsProperty.Jsii$Proxy) o;

                if (!ecsSpec.equals(that.ecsSpec)) return false;
                if (!image.equals(that.image)) return false;
                if (!podCount.equals(that.podCount)) return false;
                if (!type.equals(that.type)) return false;
                if (!useSpotInstance.equals(that.useSpotInstance)) return false;
                if (this.extraPodSpec != null ? !this.extraPodSpec.equals(that.extraPodSpec) : that.extraPodSpec != null) return false;
                if (this.imageConfig != null ? !this.imageConfig.equals(that.imageConfig) : that.imageConfig != null) return false;
                return this.resourceConfig != null ? this.resourceConfig.equals(that.resourceConfig) : that.resourceConfig == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ecsSpec.hashCode();
                result = 31 * result + (this.image.hashCode());
                result = 31 * result + (this.podCount.hashCode());
                result = 31 * result + (this.type.hashCode());
                result = 31 * result + (this.useSpotInstance.hashCode());
                result = 31 * result + (this.extraPodSpec != null ? this.extraPodSpec.hashCode() : 0);
                result = 31 * result + (this.imageConfig != null ? this.imageConfig.hashCode() : 0);
                result = 31 * result + (this.resourceConfig != null ? this.resourceConfig.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paidlc.$Module.class, fqn = "@alicloud/ros-cdk-paidlc.RosJob.UserVpcProperty")
    @software.amazon.jsii.Jsii.Proxy(UserVpcProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface UserVpcProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExtendedCidRs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSwitchId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link UserVpcProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link UserVpcProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<UserVpcProperty> {
            java.lang.Object vpcId;
            java.lang.Object extendedCidRs;
            java.lang.Object securityGroupId;
            java.lang.Object switchId;

            /**
             * Sets the value of {@link UserVpcProperty#getVpcId}
             * @param vpcId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(java.lang.String vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link UserVpcProperty#getVpcId}
             * @param vpcId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link UserVpcProperty#getExtendedCidRs}
             * @param extendedCidRs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder extendedCidRs(com.aliyun.ros.cdk.core.IResolvable extendedCidRs) {
                this.extendedCidRs = extendedCidRs;
                return this;
            }

            /**
             * Sets the value of {@link UserVpcProperty#getExtendedCidRs}
             * @param extendedCidRs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder extendedCidRs(java.util.List<? extends java.lang.Object> extendedCidRs) {
                this.extendedCidRs = extendedCidRs;
                return this;
            }

            /**
             * Sets the value of {@link UserVpcProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(java.lang.String securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link UserVpcProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link UserVpcProperty#getSwitchId}
             * @param switchId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder switchId(java.lang.String switchId) {
                this.switchId = switchId;
                return this;
            }

            /**
             * Sets the value of {@link UserVpcProperty#getSwitchId}
             * @param switchId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder switchId(com.aliyun.ros.cdk.core.IResolvable switchId) {
                this.switchId = switchId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link UserVpcProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public UserVpcProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link UserVpcProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UserVpcProperty {
            private final java.lang.Object vpcId;
            private final java.lang.Object extendedCidRs;
            private final java.lang.Object securityGroupId;
            private final java.lang.Object switchId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.extendedCidRs = software.amazon.jsii.Kernel.get(this, "extendedCidRs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.switchId = software.amazon.jsii.Kernel.get(this, "switchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
                this.extendedCidRs = builder.extendedCidRs;
                this.securityGroupId = builder.securityGroupId;
                this.switchId = builder.switchId;
            }

            @Override
            public final java.lang.Object getVpcId() {
                return this.vpcId;
            }

            @Override
            public final java.lang.Object getExtendedCidRs() {
                return this.extendedCidRs;
            }

            @Override
            public final java.lang.Object getSecurityGroupId() {
                return this.securityGroupId;
            }

            @Override
            public final java.lang.Object getSwitchId() {
                return this.switchId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("vpcId", om.valueToTree(this.getVpcId()));
                if (this.getExtendedCidRs() != null) {
                    data.set("extendedCidRs", om.valueToTree(this.getExtendedCidRs()));
                }
                if (this.getSecurityGroupId() != null) {
                    data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
                }
                if (this.getSwitchId() != null) {
                    data.set("switchId", om.valueToTree(this.getSwitchId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-paidlc.RosJob.UserVpcProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                UserVpcProperty.Jsii$Proxy that = (UserVpcProperty.Jsii$Proxy) o;

                if (!vpcId.equals(that.vpcId)) return false;
                if (this.extendedCidRs != null ? !this.extendedCidRs.equals(that.extendedCidRs) : that.extendedCidRs != null) return false;
                if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
                return this.switchId != null ? this.switchId.equals(that.switchId) : that.switchId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.vpcId.hashCode();
                result = 31 * result + (this.extendedCidRs != null ? this.extendedCidRs.hashCode() : 0);
                result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
                result = 31 * result + (this.switchId != null ? this.switchId.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.paidlc.RosJob}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.paidlc.RosJob> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.paidlc.RosJobProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.paidlc.RosJobProps.Builder();
        }

        /**
         * @return {@code this}
         * @param displayName This parameter is required.
         */
        public Builder displayName(final java.lang.String displayName) {
            this.props.displayName(displayName);
            return this;
        }
        /**
         * @return {@code this}
         * @param displayName This parameter is required.
         */
        public Builder displayName(final com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.props.displayName(displayName);
            return this;
        }

        /**
         * @return {@code this}
         * @param jobSpecs This parameter is required.
         */
        public Builder jobSpecs(final com.aliyun.ros.cdk.core.IResolvable jobSpecs) {
            this.props.jobSpecs(jobSpecs);
            return this;
        }
        /**
         * @return {@code this}
         * @param jobSpecs This parameter is required.
         */
        public Builder jobSpecs(final java.util.List<? extends java.lang.Object> jobSpecs) {
            this.props.jobSpecs(jobSpecs);
            return this;
        }

        /**
         * @return {@code this}
         * @param jobType This parameter is required.
         */
        public Builder jobType(final java.lang.String jobType) {
            this.props.jobType(jobType);
            return this;
        }
        /**
         * @return {@code this}
         * @param jobType This parameter is required.
         */
        public Builder jobType(final com.aliyun.ros.cdk.core.IResolvable jobType) {
            this.props.jobType(jobType);
            return this;
        }

        /**
         * @return {@code this}
         * @param userCommand This parameter is required.
         */
        public Builder userCommand(final java.lang.String userCommand) {
            this.props.userCommand(userCommand);
            return this;
        }
        /**
         * @return {@code this}
         * @param userCommand This parameter is required.
         */
        public Builder userCommand(final com.aliyun.ros.cdk.core.IResolvable userCommand) {
            this.props.userCommand(userCommand);
            return this;
        }

        /**
         * @return {@code this}
         * @param workspaceId This parameter is required.
         */
        public Builder workspaceId(final java.lang.String workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param workspaceId This parameter is required.
         */
        public Builder workspaceId(final com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param codeSource This parameter is required.
         */
        public Builder codeSource(final com.aliyun.ros.cdk.core.IResolvable codeSource) {
            this.props.codeSource(codeSource);
            return this;
        }
        /**
         * @return {@code this}
         * @param codeSource This parameter is required.
         */
        public Builder codeSource(final com.aliyun.ros.cdk.paidlc.RosJob.CodeSourceProperty codeSource) {
            this.props.codeSource(codeSource);
            return this;
        }

        /**
         * @return {@code this}
         * @param dataSources This parameter is required.
         */
        public Builder dataSources(final com.aliyun.ros.cdk.core.IResolvable dataSources) {
            this.props.dataSources(dataSources);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataSources This parameter is required.
         */
        public Builder dataSources(final java.util.List<? extends java.lang.Object> dataSources) {
            this.props.dataSources(dataSources);
            return this;
        }

        /**
         * @return {@code this}
         * @param envs This parameter is required.
         */
        public Builder envs(final java.lang.String envs) {
            this.props.envs(envs);
            return this;
        }
        /**
         * @return {@code this}
         * @param envs This parameter is required.
         */
        public Builder envs(final com.aliyun.ros.cdk.core.IResolvable envs) {
            this.props.envs(envs);
            return this;
        }

        /**
         * @return {@code this}
         * @param jobMaxRunningTimeMinutes This parameter is required.
         */
        public Builder jobMaxRunningTimeMinutes(final java.lang.Number jobMaxRunningTimeMinutes) {
            this.props.jobMaxRunningTimeMinutes(jobMaxRunningTimeMinutes);
            return this;
        }
        /**
         * @return {@code this}
         * @param jobMaxRunningTimeMinutes This parameter is required.
         */
        public Builder jobMaxRunningTimeMinutes(final com.aliyun.ros.cdk.core.IResolvable jobMaxRunningTimeMinutes) {
            this.props.jobMaxRunningTimeMinutes(jobMaxRunningTimeMinutes);
            return this;
        }

        /**
         * @return {@code this}
         * @param options This parameter is required.
         */
        public Builder options(final java.lang.String options) {
            this.props.options(options);
            return this;
        }
        /**
         * @return {@code this}
         * @param options This parameter is required.
         */
        public Builder options(final com.aliyun.ros.cdk.core.IResolvable options) {
            this.props.options(options);
            return this;
        }

        /**
         * @return {@code this}
         * @param priority This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * @return {@code this}
         * @param priority This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceId This parameter is required.
         */
        public Builder resourceId(final java.lang.String resourceId) {
            this.props.resourceId(resourceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceId This parameter is required.
         */
        public Builder resourceId(final com.aliyun.ros.cdk.core.IResolvable resourceId) {
            this.props.resourceId(resourceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param settings This parameter is required.
         */
        public Builder settings(final com.aliyun.ros.cdk.core.IResolvable settings) {
            this.props.settings(settings);
            return this;
        }
        /**
         * @return {@code this}
         * @param settings This parameter is required.
         */
        public Builder settings(final java.util.Map<java.lang.String, ? extends java.lang.Object> settings) {
            this.props.settings(settings);
            return this;
        }

        /**
         * @return {@code this}
         * @param successPolicy This parameter is required.
         */
        public Builder successPolicy(final java.lang.String successPolicy) {
            this.props.successPolicy(successPolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param successPolicy This parameter is required.
         */
        public Builder successPolicy(final com.aliyun.ros.cdk.core.IResolvable successPolicy) {
            this.props.successPolicy(successPolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param thirdpartyLibDir This parameter is required.
         */
        public Builder thirdpartyLibDir(final java.lang.String thirdpartyLibDir) {
            this.props.thirdpartyLibDir(thirdpartyLibDir);
            return this;
        }
        /**
         * @return {@code this}
         * @param thirdpartyLibDir This parameter is required.
         */
        public Builder thirdpartyLibDir(final com.aliyun.ros.cdk.core.IResolvable thirdpartyLibDir) {
            this.props.thirdpartyLibDir(thirdpartyLibDir);
            return this;
        }

        /**
         * @return {@code this}
         * @param thirdpartyLibs This parameter is required.
         */
        public Builder thirdpartyLibs(final com.aliyun.ros.cdk.core.IResolvable thirdpartyLibs) {
            this.props.thirdpartyLibs(thirdpartyLibs);
            return this;
        }
        /**
         * @return {@code this}
         * @param thirdpartyLibs This parameter is required.
         */
        public Builder thirdpartyLibs(final java.util.List<? extends java.lang.Object> thirdpartyLibs) {
            this.props.thirdpartyLibs(thirdpartyLibs);
            return this;
        }

        /**
         * @return {@code this}
         * @param userVpc This parameter is required.
         */
        public Builder userVpc(final com.aliyun.ros.cdk.core.IResolvable userVpc) {
            this.props.userVpc(userVpc);
            return this;
        }
        /**
         * @return {@code this}
         * @param userVpc This parameter is required.
         */
        public Builder userVpc(final com.aliyun.ros.cdk.paidlc.RosJob.UserVpcProperty userVpc) {
            this.props.userVpc(userVpc);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.paidlc.RosJob}.
         */
        @Override
        public com.aliyun.ros.cdk.paidlc.RosJob build() {
            return new com.aliyun.ros.cdk.paidlc.RosJob(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
