package com.aliyun.ros.cdk.cr;

/**
 * A ROS template type:  `ALIYUN::CR::Repository`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.49.0 (build e322d87)", date = "2021-12-21T15:12:57.215Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.RosRepository")
public class RosRepository extends com.aliyun.ros.cdk.core.RosResource {

    protected RosRepository(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosRepository(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cr.RosRepository.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::CR::Repository`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosRepository(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.RosRepositoryProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRepoId() {
        return software.amazon.jsii.Kernel.get(this, "attrRepoId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getRepoName() {
        return software.amazon.jsii.Kernel.get(this, "repoName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRepoName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "repoName", java.util.Objects.requireNonNull(value, "repoName is required"));
    }

    /**
     */
    public void setRepoName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "repoName", java.util.Objects.requireNonNull(value, "repoName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRepoNamespace() {
        return software.amazon.jsii.Kernel.get(this, "repoNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRepoNamespace(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "repoNamespace", java.util.Objects.requireNonNull(value, "repoNamespace is required"));
    }

    /**
     */
    public void setRepoNamespace(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "repoNamespace", java.util.Objects.requireNonNull(value, "repoNamespace is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRepoType() {
        return software.amazon.jsii.Kernel.get(this, "repoType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRepoType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "repoType", java.util.Objects.requireNonNull(value, "repoType is required"));
    }

    /**
     */
    public void setRepoType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "repoType", java.util.Objects.requireNonNull(value, "repoType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSummary() {
        return software.amazon.jsii.Kernel.get(this, "summary", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSummary(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "summary", java.util.Objects.requireNonNull(value, "summary is required"));
    }

    /**
     */
    public void setSummary(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "summary", java.util.Objects.requireNonNull(value, "summary is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDetail() {
        return software.amazon.jsii.Kernel.get(this, "detail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDetail(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "detail", value);
    }

    /**
     */
    public void setDetail(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "detail", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRepoSource() {
        return software.amazon.jsii.Kernel.get(this, "repoSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRepoSource(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "repoSource", value);
    }

    /**
     */
    public void setRepoSource(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cr.RosRepository.RepoSourceProperty value) {
        software.amazon.jsii.Kernel.set(this, "repoSource", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.RosRepository.RepoSourceProperty")
    @software.amazon.jsii.Jsii.Proxy(RepoSourceProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RepoSourceProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getIsAutoBuild();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getIsDisableCache();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getIsOversea();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSourceRepoName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSourceRepoNamespace();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSourceRepoType();

        /**
         * @return a {@link Builder} of {@link RepoSourceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RepoSourceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RepoSourceProperty> {
            java.lang.Object isAutoBuild;
            java.lang.Object isDisableCache;
            java.lang.Object isOversea;
            java.lang.Object sourceRepoName;
            java.lang.Object sourceRepoNamespace;
            java.lang.Object sourceRepoType;

            /**
             * Sets the value of {@link RepoSourceProperty#getIsAutoBuild}
             * @param isAutoBuild the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isAutoBuild(java.lang.Boolean isAutoBuild) {
                this.isAutoBuild = isAutoBuild;
                return this;
            }

            /**
             * Sets the value of {@link RepoSourceProperty#getIsAutoBuild}
             * @param isAutoBuild the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isAutoBuild(com.aliyun.ros.cdk.core.IResolvable isAutoBuild) {
                this.isAutoBuild = isAutoBuild;
                return this;
            }

            /**
             * Sets the value of {@link RepoSourceProperty#getIsDisableCache}
             * @param isDisableCache the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isDisableCache(java.lang.Boolean isDisableCache) {
                this.isDisableCache = isDisableCache;
                return this;
            }

            /**
             * Sets the value of {@link RepoSourceProperty#getIsDisableCache}
             * @param isDisableCache the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isDisableCache(com.aliyun.ros.cdk.core.IResolvable isDisableCache) {
                this.isDisableCache = isDisableCache;
                return this;
            }

            /**
             * Sets the value of {@link RepoSourceProperty#getIsOversea}
             * @param isOversea the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isOversea(java.lang.Boolean isOversea) {
                this.isOversea = isOversea;
                return this;
            }

            /**
             * Sets the value of {@link RepoSourceProperty#getIsOversea}
             * @param isOversea the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isOversea(com.aliyun.ros.cdk.core.IResolvable isOversea) {
                this.isOversea = isOversea;
                return this;
            }

            /**
             * Sets the value of {@link RepoSourceProperty#getSourceRepoName}
             * @param sourceRepoName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceRepoName(java.lang.String sourceRepoName) {
                this.sourceRepoName = sourceRepoName;
                return this;
            }

            /**
             * Sets the value of {@link RepoSourceProperty#getSourceRepoName}
             * @param sourceRepoName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceRepoName(com.aliyun.ros.cdk.core.IResolvable sourceRepoName) {
                this.sourceRepoName = sourceRepoName;
                return this;
            }

            /**
             * Sets the value of {@link RepoSourceProperty#getSourceRepoNamespace}
             * @param sourceRepoNamespace the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceRepoNamespace(java.lang.String sourceRepoNamespace) {
                this.sourceRepoNamespace = sourceRepoNamespace;
                return this;
            }

            /**
             * Sets the value of {@link RepoSourceProperty#getSourceRepoNamespace}
             * @param sourceRepoNamespace the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceRepoNamespace(com.aliyun.ros.cdk.core.IResolvable sourceRepoNamespace) {
                this.sourceRepoNamespace = sourceRepoNamespace;
                return this;
            }

            /**
             * Sets the value of {@link RepoSourceProperty#getSourceRepoType}
             * @param sourceRepoType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceRepoType(java.lang.String sourceRepoType) {
                this.sourceRepoType = sourceRepoType;
                return this;
            }

            /**
             * Sets the value of {@link RepoSourceProperty#getSourceRepoType}
             * @param sourceRepoType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceRepoType(com.aliyun.ros.cdk.core.IResolvable sourceRepoType) {
                this.sourceRepoType = sourceRepoType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RepoSourceProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RepoSourceProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RepoSourceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RepoSourceProperty {
            private final java.lang.Object isAutoBuild;
            private final java.lang.Object isDisableCache;
            private final java.lang.Object isOversea;
            private final java.lang.Object sourceRepoName;
            private final java.lang.Object sourceRepoNamespace;
            private final java.lang.Object sourceRepoType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.isAutoBuild = software.amazon.jsii.Kernel.get(this, "isAutoBuild", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.isDisableCache = software.amazon.jsii.Kernel.get(this, "isDisableCache", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.isOversea = software.amazon.jsii.Kernel.get(this, "isOversea", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourceRepoName = software.amazon.jsii.Kernel.get(this, "sourceRepoName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourceRepoNamespace = software.amazon.jsii.Kernel.get(this, "sourceRepoNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourceRepoType = software.amazon.jsii.Kernel.get(this, "sourceRepoType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.isAutoBuild = java.util.Objects.requireNonNull(builder.isAutoBuild, "isAutoBuild is required");
                this.isDisableCache = java.util.Objects.requireNonNull(builder.isDisableCache, "isDisableCache is required");
                this.isOversea = java.util.Objects.requireNonNull(builder.isOversea, "isOversea is required");
                this.sourceRepoName = java.util.Objects.requireNonNull(builder.sourceRepoName, "sourceRepoName is required");
                this.sourceRepoNamespace = java.util.Objects.requireNonNull(builder.sourceRepoNamespace, "sourceRepoNamespace is required");
                this.sourceRepoType = java.util.Objects.requireNonNull(builder.sourceRepoType, "sourceRepoType is required");
            }

            @Override
            public final java.lang.Object getIsAutoBuild() {
                return this.isAutoBuild;
            }

            @Override
            public final java.lang.Object getIsDisableCache() {
                return this.isDisableCache;
            }

            @Override
            public final java.lang.Object getIsOversea() {
                return this.isOversea;
            }

            @Override
            public final java.lang.Object getSourceRepoName() {
                return this.sourceRepoName;
            }

            @Override
            public final java.lang.Object getSourceRepoNamespace() {
                return this.sourceRepoNamespace;
            }

            @Override
            public final java.lang.Object getSourceRepoType() {
                return this.sourceRepoType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("isAutoBuild", om.valueToTree(this.getIsAutoBuild()));
                data.set("isDisableCache", om.valueToTree(this.getIsDisableCache()));
                data.set("isOversea", om.valueToTree(this.getIsOversea()));
                data.set("sourceRepoName", om.valueToTree(this.getSourceRepoName()));
                data.set("sourceRepoNamespace", om.valueToTree(this.getSourceRepoNamespace()));
                data.set("sourceRepoType", om.valueToTree(this.getSourceRepoType()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cr.RosRepository.RepoSourceProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RepoSourceProperty.Jsii$Proxy that = (RepoSourceProperty.Jsii$Proxy) o;

                if (!isAutoBuild.equals(that.isAutoBuild)) return false;
                if (!isDisableCache.equals(that.isDisableCache)) return false;
                if (!isOversea.equals(that.isOversea)) return false;
                if (!sourceRepoName.equals(that.sourceRepoName)) return false;
                if (!sourceRepoNamespace.equals(that.sourceRepoNamespace)) return false;
                return this.sourceRepoType.equals(that.sourceRepoType);
            }

            @Override
            public final int hashCode() {
                int result = this.isAutoBuild.hashCode();
                result = 31 * result + (this.isDisableCache.hashCode());
                result = 31 * result + (this.isOversea.hashCode());
                result = 31 * result + (this.sourceRepoName.hashCode());
                result = 31 * result + (this.sourceRepoNamespace.hashCode());
                result = 31 * result + (this.sourceRepoType.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cr.RosRepository}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cr.RosRepository> {
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
        private final com.aliyun.ros.cdk.cr.RosRepositoryProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cr.RosRepositoryProps.Builder();
        }

        /**
         * @return {@code this}
         * @param repoName This parameter is required.
         */
        public Builder repoName(final java.lang.String repoName) {
            this.props.repoName(repoName);
            return this;
        }
        /**
         * @return {@code this}
         * @param repoName This parameter is required.
         */
        public Builder repoName(final com.aliyun.ros.cdk.core.IResolvable repoName) {
            this.props.repoName(repoName);
            return this;
        }

        /**
         * @return {@code this}
         * @param repoNamespace This parameter is required.
         */
        public Builder repoNamespace(final java.lang.String repoNamespace) {
            this.props.repoNamespace(repoNamespace);
            return this;
        }
        /**
         * @return {@code this}
         * @param repoNamespace This parameter is required.
         */
        public Builder repoNamespace(final com.aliyun.ros.cdk.core.IResolvable repoNamespace) {
            this.props.repoNamespace(repoNamespace);
            return this;
        }

        /**
         * @return {@code this}
         * @param repoType This parameter is required.
         */
        public Builder repoType(final java.lang.String repoType) {
            this.props.repoType(repoType);
            return this;
        }
        /**
         * @return {@code this}
         * @param repoType This parameter is required.
         */
        public Builder repoType(final com.aliyun.ros.cdk.core.IResolvable repoType) {
            this.props.repoType(repoType);
            return this;
        }

        /**
         * @return {@code this}
         * @param summary This parameter is required.
         */
        public Builder summary(final java.lang.String summary) {
            this.props.summary(summary);
            return this;
        }
        /**
         * @return {@code this}
         * @param summary This parameter is required.
         */
        public Builder summary(final com.aliyun.ros.cdk.core.IResolvable summary) {
            this.props.summary(summary);
            return this;
        }

        /**
         * @return {@code this}
         * @param detail This parameter is required.
         */
        public Builder detail(final java.lang.String detail) {
            this.props.detail(detail);
            return this;
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
         * @param repoSource This parameter is required.
         */
        public Builder repoSource(final com.aliyun.ros.cdk.core.IResolvable repoSource) {
            this.props.repoSource(repoSource);
            return this;
        }
        /**
         * @return {@code this}
         * @param repoSource This parameter is required.
         */
        public Builder repoSource(final com.aliyun.ros.cdk.cr.RosRepository.RepoSourceProperty repoSource) {
            this.props.repoSource(repoSource);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cr.RosRepository}.
         */
        @Override
        public com.aliyun.ros.cdk.cr.RosRepository build() {
            return new com.aliyun.ros.cdk.cr.RosRepository(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
