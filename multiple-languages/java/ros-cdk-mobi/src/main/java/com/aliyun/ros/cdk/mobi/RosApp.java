package com.aliyun.ros.cdk.mobi;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::MOBI::App</code>, which is used to create an application.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:48.609Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mobi.$Module.class, fqn = "@alicloud/ros-cdk-mobi.RosApp")
public class RosApp extends com.aliyun.ros.cdk.core.RosResource {

    protected RosApp(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosApp(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.mobi.RosApp.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosApp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mobi.RosAppProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrAppDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppIcon() {
        return software.amazon.jsii.Kernel.get(this, "attrAppIcon", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppId() {
        return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppName() {
        return software.amazon.jsii.Kernel.get(this, "attrAppName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppType() {
        return software.amazon.jsii.Kernel.get(this, "attrAppType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppWorkspaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrAppWorkspaceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrModifiedTime() {
        return software.amazon.jsii.Kernel.get(this, "attrModifiedTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAppIcon() {
        return software.amazon.jsii.Kernel.get(this, "appIcon", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppIcon(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appIcon", java.util.Objects.requireNonNull(value, "appIcon is required"));
    }

    /**
     */
    public void setAppIcon(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appIcon", java.util.Objects.requireNonNull(value, "appIcon is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAppName() {
        return software.amazon.jsii.Kernel.get(this, "appName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appName", java.util.Objects.requireNonNull(value, "appName is required"));
    }

    /**
     */
    public void setAppName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appName", java.util.Objects.requireNonNull(value, "appName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAppWorkspaceId() {
        return software.amazon.jsii.Kernel.get(this, "appWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppWorkspaceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appWorkspaceId", java.util.Objects.requireNonNull(value, "appWorkspaceId is required"));
    }

    /**
     */
    public void setAppWorkspaceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appWorkspaceId", java.util.Objects.requireNonNull(value, "appWorkspaceId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTemplate() {
        return software.amazon.jsii.Kernel.get(this, "template", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "template", java.util.Objects.requireNonNull(value, "template is required"));
    }

    /**
     */
    public void setTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mobi.RosApp.TemplateProperty value) {
        software.amazon.jsii.Kernel.set(this, "template", java.util.Objects.requireNonNull(value, "template is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAppDescription() {
        return software.amazon.jsii.Kernel.get(this, "appDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appDescription", value);
    }

    /**
     */
    public void setAppDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAppType() {
        return software.amazon.jsii.Kernel.get(this, "appType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appType", value);
    }

    /**
     */
    public void setAppType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appType", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mobi.$Module.class, fqn = "@alicloud/ros-cdk-mobi.RosApp.TemplateProperty")
    @software.amazon.jsii.Jsii.Proxy(TemplateProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TemplateProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getConnectionsContent();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTemplateId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getActualParameters() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TemplateProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TemplateProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TemplateProperty> {
            java.lang.Object connectionsContent;
            java.lang.Object templateId;
            java.lang.Object actualParameters;

            /**
             * Sets the value of {@link TemplateProperty#getConnectionsContent}
             * @param connectionsContent the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionsContent(java.lang.String connectionsContent) {
                this.connectionsContent = connectionsContent;
                return this;
            }

            /**
             * Sets the value of {@link TemplateProperty#getConnectionsContent}
             * @param connectionsContent the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionsContent(com.aliyun.ros.cdk.core.IResolvable connectionsContent) {
                this.connectionsContent = connectionsContent;
                return this;
            }

            /**
             * Sets the value of {@link TemplateProperty#getTemplateId}
             * @param templateId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder templateId(java.lang.String templateId) {
                this.templateId = templateId;
                return this;
            }

            /**
             * Sets the value of {@link TemplateProperty#getTemplateId}
             * @param templateId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder templateId(com.aliyun.ros.cdk.core.IResolvable templateId) {
                this.templateId = templateId;
                return this;
            }

            /**
             * Sets the value of {@link TemplateProperty#getActualParameters}
             * @param actualParameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder actualParameters(java.lang.String actualParameters) {
                this.actualParameters = actualParameters;
                return this;
            }

            /**
             * Sets the value of {@link TemplateProperty#getActualParameters}
             * @param actualParameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder actualParameters(com.aliyun.ros.cdk.core.IResolvable actualParameters) {
                this.actualParameters = actualParameters;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TemplateProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TemplateProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TemplateProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TemplateProperty {
            private final java.lang.Object connectionsContent;
            private final java.lang.Object templateId;
            private final java.lang.Object actualParameters;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.connectionsContent = software.amazon.jsii.Kernel.get(this, "connectionsContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.templateId = software.amazon.jsii.Kernel.get(this, "templateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.actualParameters = software.amazon.jsii.Kernel.get(this, "actualParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.connectionsContent = java.util.Objects.requireNonNull(builder.connectionsContent, "connectionsContent is required");
                this.templateId = java.util.Objects.requireNonNull(builder.templateId, "templateId is required");
                this.actualParameters = builder.actualParameters;
            }

            @Override
            public final java.lang.Object getConnectionsContent() {
                return this.connectionsContent;
            }

            @Override
            public final java.lang.Object getTemplateId() {
                return this.templateId;
            }

            @Override
            public final java.lang.Object getActualParameters() {
                return this.actualParameters;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("connectionsContent", om.valueToTree(this.getConnectionsContent()));
                data.set("templateId", om.valueToTree(this.getTemplateId()));
                if (this.getActualParameters() != null) {
                    data.set("actualParameters", om.valueToTree(this.getActualParameters()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mobi.RosApp.TemplateProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TemplateProperty.Jsii$Proxy that = (TemplateProperty.Jsii$Proxy) o;

                if (!connectionsContent.equals(that.connectionsContent)) return false;
                if (!templateId.equals(that.templateId)) return false;
                return this.actualParameters != null ? this.actualParameters.equals(that.actualParameters) : that.actualParameters == null;
            }

            @Override
            public final int hashCode() {
                int result = this.connectionsContent.hashCode();
                result = 31 * result + (this.templateId.hashCode());
                result = 31 * result + (this.actualParameters != null ? this.actualParameters.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mobi.RosApp}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mobi.RosApp> {
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
        private final com.aliyun.ros.cdk.mobi.RosAppProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mobi.RosAppProps.Builder();
        }

        /**
         * @return {@code this}
         * @param appIcon This parameter is required.
         */
        public Builder appIcon(final java.lang.String appIcon) {
            this.props.appIcon(appIcon);
            return this;
        }
        /**
         * @return {@code this}
         * @param appIcon This parameter is required.
         */
        public Builder appIcon(final com.aliyun.ros.cdk.core.IResolvable appIcon) {
            this.props.appIcon(appIcon);
            return this;
        }

        /**
         * @return {@code this}
         * @param appName This parameter is required.
         */
        public Builder appName(final java.lang.String appName) {
            this.props.appName(appName);
            return this;
        }
        /**
         * @return {@code this}
         * @param appName This parameter is required.
         */
        public Builder appName(final com.aliyun.ros.cdk.core.IResolvable appName) {
            this.props.appName(appName);
            return this;
        }

        /**
         * @return {@code this}
         * @param appWorkspaceId This parameter is required.
         */
        public Builder appWorkspaceId(final java.lang.String appWorkspaceId) {
            this.props.appWorkspaceId(appWorkspaceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param appWorkspaceId This parameter is required.
         */
        public Builder appWorkspaceId(final com.aliyun.ros.cdk.core.IResolvable appWorkspaceId) {
            this.props.appWorkspaceId(appWorkspaceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param template This parameter is required.
         */
        public Builder template(final com.aliyun.ros.cdk.core.IResolvable template) {
            this.props.template(template);
            return this;
        }
        /**
         * @return {@code this}
         * @param template This parameter is required.
         */
        public Builder template(final com.aliyun.ros.cdk.mobi.RosApp.TemplateProperty template) {
            this.props.template(template);
            return this;
        }

        /**
         * @return {@code this}
         * @param appDescription This parameter is required.
         */
        public Builder appDescription(final java.lang.String appDescription) {
            this.props.appDescription(appDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param appDescription This parameter is required.
         */
        public Builder appDescription(final com.aliyun.ros.cdk.core.IResolvable appDescription) {
            this.props.appDescription(appDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param appType This parameter is required.
         */
        public Builder appType(final java.lang.String appType) {
            this.props.appType(appType);
            return this;
        }
        /**
         * @return {@code this}
         * @param appType This parameter is required.
         */
        public Builder appType(final com.aliyun.ros.cdk.core.IResolvable appType) {
            this.props.appType(appType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mobi.RosApp}.
         */
        @Override
        public com.aliyun.ros.cdk.mobi.RosApp build() {
            return new com.aliyun.ros.cdk.mobi.RosApp(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
