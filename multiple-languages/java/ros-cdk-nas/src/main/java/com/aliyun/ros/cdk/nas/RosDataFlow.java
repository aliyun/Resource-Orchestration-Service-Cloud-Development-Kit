package com.aliyun.ros.cdk.nas;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::NAS::DataFlow</code>, which is used to create a data flow between a Cloud Parallel File Storage (CPFS) file system and an Object Storage Service (OSS) bucket.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:09.527Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.RosDataFlow")
public class RosDataFlow extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDataFlow(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDataFlow(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.nas.RosDataFlow.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDataFlow(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.RosDataFlowProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDataFlowId() {
        return software.amazon.jsii.Kernel.get(this, "attrDataFlowId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFileSystemId() {
        return software.amazon.jsii.Kernel.get(this, "attrFileSystemId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getFileSystemId() {
        return software.amazon.jsii.Kernel.get(this, "fileSystemId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFileSystemId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "fileSystemId", java.util.Objects.requireNonNull(value, "fileSystemId is required"));
    }

    /**
     */
    public void setFileSystemId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fileSystemId", java.util.Objects.requireNonNull(value, "fileSystemId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getFsetId() {
        return software.amazon.jsii.Kernel.get(this, "fsetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFsetId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "fsetId", java.util.Objects.requireNonNull(value, "fsetId is required"));
    }

    /**
     */
    public void setFsetId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fsetId", java.util.Objects.requireNonNull(value, "fsetId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSourceStorage() {
        return software.amazon.jsii.Kernel.get(this, "sourceStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceStorage(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceStorage", java.util.Objects.requireNonNull(value, "sourceStorage is required"));
    }

    /**
     */
    public void setSourceStorage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceStorage", java.util.Objects.requireNonNull(value, "sourceStorage is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getThroughput() {
        return software.amazon.jsii.Kernel.get(this, "throughput", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setThroughput(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "throughput", java.util.Objects.requireNonNull(value, "throughput is required"));
    }

    /**
     */
    public void setThroughput(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "throughput", java.util.Objects.requireNonNull(value, "throughput is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoRefreshInterval() {
        return software.amazon.jsii.Kernel.get(this, "autoRefreshInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoRefreshInterval(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "autoRefreshInterval", value);
    }

    /**
     */
    public void setAutoRefreshInterval(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoRefreshInterval", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoRefreshPolicy() {
        return software.amazon.jsii.Kernel.get(this, "autoRefreshPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoRefreshPolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "autoRefreshPolicy", value);
    }

    /**
     */
    public void setAutoRefreshPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoRefreshPolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoRefreshs() {
        return software.amazon.jsii.Kernel.get(this, "autoRefreshs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoRefreshs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoRefreshs", value);
    }

    /**
     */
    public void setAutoRefreshs(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.nas.RosDataFlow.AutoRefreshsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.nas.RosDataFlow.AutoRefreshsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "autoRefreshs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceSecurityType() {
        return software.amazon.jsii.Kernel.get(this, "sourceSecurityType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceSecurityType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceSecurityType", value);
    }

    /**
     */
    public void setSourceSecurityType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceSecurityType", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.RosDataFlow.AutoRefreshsProperty")
    @software.amazon.jsii.Jsii.Proxy(AutoRefreshsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AutoRefreshsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRefreshPath();

        /**
         * @return a {@link Builder} of {@link AutoRefreshsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AutoRefreshsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AutoRefreshsProperty> {
            java.lang.Object refreshPath;

            /**
             * Sets the value of {@link AutoRefreshsProperty#getRefreshPath}
             * @param refreshPath the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder refreshPath(java.lang.String refreshPath) {
                this.refreshPath = refreshPath;
                return this;
            }

            /**
             * Sets the value of {@link AutoRefreshsProperty#getRefreshPath}
             * @param refreshPath the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder refreshPath(com.aliyun.ros.cdk.core.IResolvable refreshPath) {
                this.refreshPath = refreshPath;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AutoRefreshsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AutoRefreshsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AutoRefreshsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AutoRefreshsProperty {
            private final java.lang.Object refreshPath;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.refreshPath = software.amazon.jsii.Kernel.get(this, "refreshPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.refreshPath = java.util.Objects.requireNonNull(builder.refreshPath, "refreshPath is required");
            }

            @Override
            public final java.lang.Object getRefreshPath() {
                return this.refreshPath;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("refreshPath", om.valueToTree(this.getRefreshPath()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nas.RosDataFlow.AutoRefreshsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AutoRefreshsProperty.Jsii$Proxy that = (AutoRefreshsProperty.Jsii$Proxy) o;

                return this.refreshPath.equals(that.refreshPath);
            }

            @Override
            public final int hashCode() {
                int result = this.refreshPath.hashCode();
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.nas.RosDataFlow}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nas.RosDataFlow> {
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
        private final com.aliyun.ros.cdk.nas.RosDataFlowProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nas.RosDataFlowProps.Builder();
        }

        /**
         * @return {@code this}
         * @param fileSystemId This parameter is required.
         */
        public Builder fileSystemId(final java.lang.String fileSystemId) {
            this.props.fileSystemId(fileSystemId);
            return this;
        }
        /**
         * @return {@code this}
         * @param fileSystemId This parameter is required.
         */
        public Builder fileSystemId(final com.aliyun.ros.cdk.core.IResolvable fileSystemId) {
            this.props.fileSystemId(fileSystemId);
            return this;
        }

        /**
         * @return {@code this}
         * @param fsetId This parameter is required.
         */
        public Builder fsetId(final java.lang.String fsetId) {
            this.props.fsetId(fsetId);
            return this;
        }
        /**
         * @return {@code this}
         * @param fsetId This parameter is required.
         */
        public Builder fsetId(final com.aliyun.ros.cdk.core.IResolvable fsetId) {
            this.props.fsetId(fsetId);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceStorage This parameter is required.
         */
        public Builder sourceStorage(final java.lang.String sourceStorage) {
            this.props.sourceStorage(sourceStorage);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceStorage This parameter is required.
         */
        public Builder sourceStorage(final com.aliyun.ros.cdk.core.IResolvable sourceStorage) {
            this.props.sourceStorage(sourceStorage);
            return this;
        }

        /**
         * @return {@code this}
         * @param throughput This parameter is required.
         */
        public Builder throughput(final java.lang.Number throughput) {
            this.props.throughput(throughput);
            return this;
        }
        /**
         * @return {@code this}
         * @param throughput This parameter is required.
         */
        public Builder throughput(final com.aliyun.ros.cdk.core.IResolvable throughput) {
            this.props.throughput(throughput);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRefreshInterval This parameter is required.
         */
        public Builder autoRefreshInterval(final java.lang.Number autoRefreshInterval) {
            this.props.autoRefreshInterval(autoRefreshInterval);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRefreshInterval This parameter is required.
         */
        public Builder autoRefreshInterval(final com.aliyun.ros.cdk.core.IResolvable autoRefreshInterval) {
            this.props.autoRefreshInterval(autoRefreshInterval);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRefreshPolicy This parameter is required.
         */
        public Builder autoRefreshPolicy(final java.lang.String autoRefreshPolicy) {
            this.props.autoRefreshPolicy(autoRefreshPolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRefreshPolicy This parameter is required.
         */
        public Builder autoRefreshPolicy(final com.aliyun.ros.cdk.core.IResolvable autoRefreshPolicy) {
            this.props.autoRefreshPolicy(autoRefreshPolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRefreshs This parameter is required.
         */
        public Builder autoRefreshs(final com.aliyun.ros.cdk.core.IResolvable autoRefreshs) {
            this.props.autoRefreshs(autoRefreshs);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRefreshs This parameter is required.
         */
        public Builder autoRefreshs(final java.util.List<? extends java.lang.Object> autoRefreshs) {
            this.props.autoRefreshs(autoRefreshs);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceSecurityType This parameter is required.
         */
        public Builder sourceSecurityType(final java.lang.String sourceSecurityType) {
            this.props.sourceSecurityType(sourceSecurityType);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceSecurityType This parameter is required.
         */
        public Builder sourceSecurityType(final com.aliyun.ros.cdk.core.IResolvable sourceSecurityType) {
            this.props.sourceSecurityType(sourceSecurityType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nas.RosDataFlow}.
         */
        @Override
        public com.aliyun.ros.cdk.nas.RosDataFlow build() {
            return new com.aliyun.ros.cdk.nas.RosDataFlow(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
