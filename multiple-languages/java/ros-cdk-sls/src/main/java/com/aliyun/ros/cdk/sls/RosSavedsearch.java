package com.aliyun.ros.cdk.sls;

/**
 * A ROS template type:  `ALIYUN::SLS::Savedsearch`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-29T01:47:30.539Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosSavedsearch")
public class RosSavedsearch extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSavedsearch(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSavedsearch(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.sls.RosSavedsearch.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::SLS::Savedsearch`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSavedsearch(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.RosSavedsearchProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSavedsearchName() {
        return software.amazon.jsii.Kernel.get(this, "attrSavedsearchName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDetail() {
        return software.amazon.jsii.Kernel.get(this, "detail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDetail(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "detail", java.util.Objects.requireNonNull(value, "detail is required"));
    }

    /**
     */
    public void setDetail(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.RosSavedsearch.DetailProperty value) {
        software.amazon.jsii.Kernel.set(this, "detail", java.util.Objects.requireNonNull(value, "detail is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProject() {
        return software.amazon.jsii.Kernel.get(this, "project", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProject(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "project", java.util.Objects.requireNonNull(value, "project is required"));
    }

    /**
     */
    public void setProject(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "project", java.util.Objects.requireNonNull(value, "project is required"));
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosSavedsearch.DetailProperty")
    @software.amazon.jsii.Jsii.Proxy(DetailProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DetailProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getLogstore();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSavedsearchName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSearchQuery();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTopic();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDisplayName() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DetailProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DetailProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DetailProperty> {
            java.lang.Object logstore;
            java.lang.Object savedsearchName;
            java.lang.Object searchQuery;
            java.lang.Object topic;
            java.lang.Object displayName;

            /**
             * Sets the value of {@link DetailProperty#getLogstore}
             * @param logstore the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logstore(java.lang.String logstore) {
                this.logstore = logstore;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getLogstore}
             * @param logstore the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logstore(com.aliyun.ros.cdk.core.IResolvable logstore) {
                this.logstore = logstore;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getSavedsearchName}
             * @param savedsearchName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder savedsearchName(java.lang.String savedsearchName) {
                this.savedsearchName = savedsearchName;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getSavedsearchName}
             * @param savedsearchName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder savedsearchName(com.aliyun.ros.cdk.core.IResolvable savedsearchName) {
                this.savedsearchName = savedsearchName;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getSearchQuery}
             * @param searchQuery the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder searchQuery(java.lang.String searchQuery) {
                this.searchQuery = searchQuery;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getSearchQuery}
             * @param searchQuery the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder searchQuery(com.aliyun.ros.cdk.core.IResolvable searchQuery) {
                this.searchQuery = searchQuery;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getTopic}
             * @param topic the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder topic(java.lang.String topic) {
                this.topic = topic;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getTopic}
             * @param topic the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder topic(com.aliyun.ros.cdk.core.IResolvable topic) {
                this.topic = topic;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getDisplayName}
             * @param displayName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder displayName(java.lang.String displayName) {
                this.displayName = displayName;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getDisplayName}
             * @param displayName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder displayName(com.aliyun.ros.cdk.core.IResolvable displayName) {
                this.displayName = displayName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DetailProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DetailProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DetailProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DetailProperty {
            private final java.lang.Object logstore;
            private final java.lang.Object savedsearchName;
            private final java.lang.Object searchQuery;
            private final java.lang.Object topic;
            private final java.lang.Object displayName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.logstore = software.amazon.jsii.Kernel.get(this, "logstore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.savedsearchName = software.amazon.jsii.Kernel.get(this, "savedsearchName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.searchQuery = software.amazon.jsii.Kernel.get(this, "searchQuery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.topic = software.amazon.jsii.Kernel.get(this, "topic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.displayName = software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.logstore = java.util.Objects.requireNonNull(builder.logstore, "logstore is required");
                this.savedsearchName = java.util.Objects.requireNonNull(builder.savedsearchName, "savedsearchName is required");
                this.searchQuery = java.util.Objects.requireNonNull(builder.searchQuery, "searchQuery is required");
                this.topic = java.util.Objects.requireNonNull(builder.topic, "topic is required");
                this.displayName = builder.displayName;
            }

            @Override
            public final java.lang.Object getLogstore() {
                return this.logstore;
            }

            @Override
            public final java.lang.Object getSavedsearchName() {
                return this.savedsearchName;
            }

            @Override
            public final java.lang.Object getSearchQuery() {
                return this.searchQuery;
            }

            @Override
            public final java.lang.Object getTopic() {
                return this.topic;
            }

            @Override
            public final java.lang.Object getDisplayName() {
                return this.displayName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("logstore", om.valueToTree(this.getLogstore()));
                data.set("savedsearchName", om.valueToTree(this.getSavedsearchName()));
                data.set("searchQuery", om.valueToTree(this.getSearchQuery()));
                data.set("topic", om.valueToTree(this.getTopic()));
                if (this.getDisplayName() != null) {
                    data.set("displayName", om.valueToTree(this.getDisplayName()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosSavedsearch.DetailProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DetailProperty.Jsii$Proxy that = (DetailProperty.Jsii$Proxy) o;

                if (!logstore.equals(that.logstore)) return false;
                if (!savedsearchName.equals(that.savedsearchName)) return false;
                if (!searchQuery.equals(that.searchQuery)) return false;
                if (!topic.equals(that.topic)) return false;
                return this.displayName != null ? this.displayName.equals(that.displayName) : that.displayName == null;
            }

            @Override
            public final int hashCode() {
                int result = this.logstore.hashCode();
                result = 31 * result + (this.savedsearchName.hashCode());
                result = 31 * result + (this.searchQuery.hashCode());
                result = 31 * result + (this.topic.hashCode());
                result = 31 * result + (this.displayName != null ? this.displayName.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sls.RosSavedsearch}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sls.RosSavedsearch> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.sls.RosSavedsearchProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sls.RosSavedsearchProps.Builder();
        }

        /**
         * @return {@code this}
         * @param detail This parameter is required.
         */
        public Builder detail(final com.aliyun.ros.cdk.core.IResolvable detail) {
            this.props.detail(detail);
            return this;
        }
        /**
         * @return {@code this}
         * @param detail This parameter is required.
         */
        public Builder detail(final com.aliyun.ros.cdk.sls.RosSavedsearch.DetailProperty detail) {
            this.props.detail(detail);
            return this;
        }

        /**
         * @return {@code this}
         * @param project This parameter is required.
         */
        public Builder project(final java.lang.String project) {
            this.props.project(project);
            return this;
        }
        /**
         * @return {@code this}
         * @param project This parameter is required.
         */
        public Builder project(final com.aliyun.ros.cdk.core.IResolvable project) {
            this.props.project(project);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.sls.RosSavedsearch}.
         */
        @Override
        public com.aliyun.ros.cdk.sls.RosSavedsearch build() {
            return new com.aliyun.ros.cdk.sls.RosSavedsearch(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
