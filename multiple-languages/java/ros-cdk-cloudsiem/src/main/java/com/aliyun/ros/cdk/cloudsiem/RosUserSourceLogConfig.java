package com.aliyun.ros.cdk.cloudsiem;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CloudSiem::UserSourceLogConfig</code>, which is used to add logs of a cloud service within an account.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:22.293Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsiem.$Module.class, fqn = "@alicloud/ros-cdk-cloudsiem.RosUserSourceLogConfig")
public class RosUserSourceLogConfig extends com.aliyun.ros.cdk.core.RosResource {

    protected RosUserSourceLogConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosUserSourceLogConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cloudsiem.RosUserSourceLogConfig.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosUserSourceLogConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsiem.RosUserSourceLogConfigProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getSourceLogCode() {
        return software.amazon.jsii.Kernel.get(this, "sourceLogCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceLogCode(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceLogCode", java.util.Objects.requireNonNull(value, "sourceLogCode is required"));
    }

    /**
     */
    public void setSourceLogCode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceLogCode", java.util.Objects.requireNonNull(value, "sourceLogCode is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSourceLogInfo() {
        return software.amazon.jsii.Kernel.get(this, "sourceLogInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceLogInfo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceLogInfo", java.util.Objects.requireNonNull(value, "sourceLogInfo is required"));
    }

    /**
     */
    public void setSourceLogInfo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsiem.RosUserSourceLogConfig.SourceLogInfoProperty value) {
        software.amazon.jsii.Kernel.set(this, "sourceLogInfo", java.util.Objects.requireNonNull(value, "sourceLogInfo is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSourceProdCode() {
        return software.amazon.jsii.Kernel.get(this, "sourceProdCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceProdCode(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceProdCode", java.util.Objects.requireNonNull(value, "sourceProdCode is required"));
    }

    /**
     */
    public void setSourceProdCode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceProdCode", java.util.Objects.requireNonNull(value, "sourceProdCode is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSubUserId() {
        return software.amazon.jsii.Kernel.get(this, "subUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSubUserId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "subUserId", java.util.Objects.requireNonNull(value, "subUserId is required"));
    }

    /**
     */
    public void setSubUserId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "subUserId", java.util.Objects.requireNonNull(value, "subUserId is required"));
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsiem.$Module.class, fqn = "@alicloud/ros-cdk-cloudsiem.RosUserSourceLogConfig.SourceLogInfoProperty")
    @software.amazon.jsii.Jsii.Proxy(SourceLogInfoProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SourceLogInfoProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getLogStore();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getProject();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRegionCode();

        /**
         * @return a {@link Builder} of {@link SourceLogInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SourceLogInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SourceLogInfoProperty> {
            java.lang.Object logStore;
            java.lang.Object project;
            java.lang.Object regionCode;

            /**
             * Sets the value of {@link SourceLogInfoProperty#getLogStore}
             * @param logStore the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logStore(java.lang.String logStore) {
                this.logStore = logStore;
                return this;
            }

            /**
             * Sets the value of {@link SourceLogInfoProperty#getLogStore}
             * @param logStore the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logStore(com.aliyun.ros.cdk.core.IResolvable logStore) {
                this.logStore = logStore;
                return this;
            }

            /**
             * Sets the value of {@link SourceLogInfoProperty#getProject}
             * @param project the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder project(java.lang.String project) {
                this.project = project;
                return this;
            }

            /**
             * Sets the value of {@link SourceLogInfoProperty#getProject}
             * @param project the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder project(com.aliyun.ros.cdk.core.IResolvable project) {
                this.project = project;
                return this;
            }

            /**
             * Sets the value of {@link SourceLogInfoProperty#getRegionCode}
             * @param regionCode the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionCode(java.lang.String regionCode) {
                this.regionCode = regionCode;
                return this;
            }

            /**
             * Sets the value of {@link SourceLogInfoProperty#getRegionCode}
             * @param regionCode the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionCode(com.aliyun.ros.cdk.core.IResolvable regionCode) {
                this.regionCode = regionCode;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SourceLogInfoProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SourceLogInfoProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SourceLogInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SourceLogInfoProperty {
            private final java.lang.Object logStore;
            private final java.lang.Object project;
            private final java.lang.Object regionCode;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.logStore = software.amazon.jsii.Kernel.get(this, "logStore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.project = software.amazon.jsii.Kernel.get(this, "project", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.regionCode = software.amazon.jsii.Kernel.get(this, "regionCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.logStore = java.util.Objects.requireNonNull(builder.logStore, "logStore is required");
                this.project = java.util.Objects.requireNonNull(builder.project, "project is required");
                this.regionCode = java.util.Objects.requireNonNull(builder.regionCode, "regionCode is required");
            }

            @Override
            public final java.lang.Object getLogStore() {
                return this.logStore;
            }

            @Override
            public final java.lang.Object getProject() {
                return this.project;
            }

            @Override
            public final java.lang.Object getRegionCode() {
                return this.regionCode;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("logStore", om.valueToTree(this.getLogStore()));
                data.set("project", om.valueToTree(this.getProject()));
                data.set("regionCode", om.valueToTree(this.getRegionCode()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudsiem.RosUserSourceLogConfig.SourceLogInfoProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SourceLogInfoProperty.Jsii$Proxy that = (SourceLogInfoProperty.Jsii$Proxy) o;

                if (!logStore.equals(that.logStore)) return false;
                if (!project.equals(that.project)) return false;
                return this.regionCode.equals(that.regionCode);
            }

            @Override
            public final int hashCode() {
                int result = this.logStore.hashCode();
                result = 31 * result + (this.project.hashCode());
                result = 31 * result + (this.regionCode.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudsiem.RosUserSourceLogConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudsiem.RosUserSourceLogConfig> {
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
        private final com.aliyun.ros.cdk.cloudsiem.RosUserSourceLogConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudsiem.RosUserSourceLogConfigProps.Builder();
        }

        /**
         * @return {@code this}
         * @param sourceLogCode This parameter is required.
         */
        public Builder sourceLogCode(final java.lang.String sourceLogCode) {
            this.props.sourceLogCode(sourceLogCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceLogCode This parameter is required.
         */
        public Builder sourceLogCode(final com.aliyun.ros.cdk.core.IResolvable sourceLogCode) {
            this.props.sourceLogCode(sourceLogCode);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceLogInfo This parameter is required.
         */
        public Builder sourceLogInfo(final com.aliyun.ros.cdk.core.IResolvable sourceLogInfo) {
            this.props.sourceLogInfo(sourceLogInfo);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceLogInfo This parameter is required.
         */
        public Builder sourceLogInfo(final com.aliyun.ros.cdk.cloudsiem.RosUserSourceLogConfig.SourceLogInfoProperty sourceLogInfo) {
            this.props.sourceLogInfo(sourceLogInfo);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceProdCode This parameter is required.
         */
        public Builder sourceProdCode(final java.lang.String sourceProdCode) {
            this.props.sourceProdCode(sourceProdCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceProdCode This parameter is required.
         */
        public Builder sourceProdCode(final com.aliyun.ros.cdk.core.IResolvable sourceProdCode) {
            this.props.sourceProdCode(sourceProdCode);
            return this;
        }

        /**
         * @return {@code this}
         * @param subUserId This parameter is required.
         */
        public Builder subUserId(final java.lang.String subUserId) {
            this.props.subUserId(subUserId);
            return this;
        }
        /**
         * @return {@code this}
         * @param subUserId This parameter is required.
         */
        public Builder subUserId(final com.aliyun.ros.cdk.core.IResolvable subUserId) {
            this.props.subUserId(subUserId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudsiem.RosUserSourceLogConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudsiem.RosUserSourceLogConfig build() {
            return new com.aliyun.ros.cdk.cloudsiem.RosUserSourceLogConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
