package com.aliyun.ros.cdk.mse;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::MSE::ServiceSource</code>, which is used to create a Nacos service source.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:22.492Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosServiceSource")
public class RosServiceSource extends com.aliyun.ros.cdk.core.RosResource {

    protected RosServiceSource(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosServiceSource(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.mse.RosServiceSource.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosServiceSource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.RosServiceSourceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGatewayUniqueId() {
        return software.amazon.jsii.Kernel.get(this, "attrGatewayUniqueId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrId() {
        return software.amazon.jsii.Kernel.get(this, "attrId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getGatewayUniqueId() {
        return software.amazon.jsii.Kernel.get(this, "gatewayUniqueId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGatewayUniqueId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "gatewayUniqueId", java.util.Objects.requireNonNull(value, "gatewayUniqueId is required"));
    }

    /**
     */
    public void setGatewayUniqueId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "gatewayUniqueId", java.util.Objects.requireNonNull(value, "gatewayUniqueId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSource() {
        return software.amazon.jsii.Kernel.get(this, "source", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSource(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "source", java.util.Objects.requireNonNull(value, "source is required"));
    }

    /**
     */
    public void setSource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "source", java.util.Objects.requireNonNull(value, "source is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAddress() {
        return software.amazon.jsii.Kernel.get(this, "address", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAddress(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "address", value);
    }

    /**
     */
    public void setAddress(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "address", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGroupList() {
        return software.amazon.jsii.Kernel.get(this, "groupList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGroupList(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "groupList", value);
    }

    /**
     */
    public void setGroupList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "groupList", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIngressOptions() {
        return software.amazon.jsii.Kernel.get(this, "ingressOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIngressOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ingressOptions", value);
    }

    /**
     */
    public void setIngressOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.mse.RosServiceSource.IngressOptionsProperty value) {
        software.amazon.jsii.Kernel.set(this, "ingressOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPathList() {
        return software.amazon.jsii.Kernel.get(this, "pathList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPathList(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "pathList", value);
    }

    /**
     */
    public void setPathList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pathList", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosServiceSource.IngressOptionsProperty")
    @software.amazon.jsii.Jsii.Proxy(IngressOptionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface IngressOptionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableIngress() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableStatus() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIngressClass() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWatchNamespace() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link IngressOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link IngressOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<IngressOptionsProperty> {
            java.lang.Object enableIngress;
            java.lang.Object enableStatus;
            java.lang.Object ingressClass;
            java.lang.Object watchNamespace;

            /**
             * Sets the value of {@link IngressOptionsProperty#getEnableIngress}
             * @param enableIngress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableIngress(java.lang.String enableIngress) {
                this.enableIngress = enableIngress;
                return this;
            }

            /**
             * Sets the value of {@link IngressOptionsProperty#getEnableIngress}
             * @param enableIngress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableIngress(com.aliyun.ros.cdk.core.IResolvable enableIngress) {
                this.enableIngress = enableIngress;
                return this;
            }

            /**
             * Sets the value of {@link IngressOptionsProperty#getEnableStatus}
             * @param enableStatus the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableStatus(java.lang.String enableStatus) {
                this.enableStatus = enableStatus;
                return this;
            }

            /**
             * Sets the value of {@link IngressOptionsProperty#getEnableStatus}
             * @param enableStatus the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableStatus(com.aliyun.ros.cdk.core.IResolvable enableStatus) {
                this.enableStatus = enableStatus;
                return this;
            }

            /**
             * Sets the value of {@link IngressOptionsProperty#getIngressClass}
             * @param ingressClass the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ingressClass(java.lang.String ingressClass) {
                this.ingressClass = ingressClass;
                return this;
            }

            /**
             * Sets the value of {@link IngressOptionsProperty#getIngressClass}
             * @param ingressClass the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ingressClass(com.aliyun.ros.cdk.core.IResolvable ingressClass) {
                this.ingressClass = ingressClass;
                return this;
            }

            /**
             * Sets the value of {@link IngressOptionsProperty#getWatchNamespace}
             * @param watchNamespace the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder watchNamespace(java.lang.String watchNamespace) {
                this.watchNamespace = watchNamespace;
                return this;
            }

            /**
             * Sets the value of {@link IngressOptionsProperty#getWatchNamespace}
             * @param watchNamespace the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder watchNamespace(com.aliyun.ros.cdk.core.IResolvable watchNamespace) {
                this.watchNamespace = watchNamespace;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link IngressOptionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public IngressOptionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link IngressOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IngressOptionsProperty {
            private final java.lang.Object enableIngress;
            private final java.lang.Object enableStatus;
            private final java.lang.Object ingressClass;
            private final java.lang.Object watchNamespace;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enableIngress = software.amazon.jsii.Kernel.get(this, "enableIngress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableStatus = software.amazon.jsii.Kernel.get(this, "enableStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ingressClass = software.amazon.jsii.Kernel.get(this, "ingressClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.watchNamespace = software.amazon.jsii.Kernel.get(this, "watchNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enableIngress = builder.enableIngress;
                this.enableStatus = builder.enableStatus;
                this.ingressClass = builder.ingressClass;
                this.watchNamespace = builder.watchNamespace;
            }

            @Override
            public final java.lang.Object getEnableIngress() {
                return this.enableIngress;
            }

            @Override
            public final java.lang.Object getEnableStatus() {
                return this.enableStatus;
            }

            @Override
            public final java.lang.Object getIngressClass() {
                return this.ingressClass;
            }

            @Override
            public final java.lang.Object getWatchNamespace() {
                return this.watchNamespace;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getEnableIngress() != null) {
                    data.set("enableIngress", om.valueToTree(this.getEnableIngress()));
                }
                if (this.getEnableStatus() != null) {
                    data.set("enableStatus", om.valueToTree(this.getEnableStatus()));
                }
                if (this.getIngressClass() != null) {
                    data.set("ingressClass", om.valueToTree(this.getIngressClass()));
                }
                if (this.getWatchNamespace() != null) {
                    data.set("watchNamespace", om.valueToTree(this.getWatchNamespace()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.RosServiceSource.IngressOptionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                IngressOptionsProperty.Jsii$Proxy that = (IngressOptionsProperty.Jsii$Proxy) o;

                if (this.enableIngress != null ? !this.enableIngress.equals(that.enableIngress) : that.enableIngress != null) return false;
                if (this.enableStatus != null ? !this.enableStatus.equals(that.enableStatus) : that.enableStatus != null) return false;
                if (this.ingressClass != null ? !this.ingressClass.equals(that.ingressClass) : that.ingressClass != null) return false;
                return this.watchNamespace != null ? this.watchNamespace.equals(that.watchNamespace) : that.watchNamespace == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enableIngress != null ? this.enableIngress.hashCode() : 0;
                result = 31 * result + (this.enableStatus != null ? this.enableStatus.hashCode() : 0);
                result = 31 * result + (this.ingressClass != null ? this.ingressClass.hashCode() : 0);
                result = 31 * result + (this.watchNamespace != null ? this.watchNamespace.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mse.RosServiceSource}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mse.RosServiceSource> {
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
        private final com.aliyun.ros.cdk.mse.RosServiceSourceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mse.RosServiceSourceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param gatewayUniqueId This parameter is required.
         */
        public Builder gatewayUniqueId(final java.lang.String gatewayUniqueId) {
            this.props.gatewayUniqueId(gatewayUniqueId);
            return this;
        }
        /**
         * @return {@code this}
         * @param gatewayUniqueId This parameter is required.
         */
        public Builder gatewayUniqueId(final com.aliyun.ros.cdk.core.IResolvable gatewayUniqueId) {
            this.props.gatewayUniqueId(gatewayUniqueId);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param source This parameter is required.
         */
        public Builder source(final java.lang.String source) {
            this.props.source(source);
            return this;
        }
        /**
         * @return {@code this}
         * @param source This parameter is required.
         */
        public Builder source(final com.aliyun.ros.cdk.core.IResolvable source) {
            this.props.source(source);
            return this;
        }

        /**
         * @return {@code this}
         * @param address This parameter is required.
         */
        public Builder address(final java.lang.String address) {
            this.props.address(address);
            return this;
        }
        /**
         * @return {@code this}
         * @param address This parameter is required.
         */
        public Builder address(final com.aliyun.ros.cdk.core.IResolvable address) {
            this.props.address(address);
            return this;
        }

        /**
         * @return {@code this}
         * @param groupList This parameter is required.
         */
        public Builder groupList(final java.util.List<? extends java.lang.Object> groupList) {
            this.props.groupList(groupList);
            return this;
        }
        /**
         * @return {@code this}
         * @param groupList This parameter is required.
         */
        public Builder groupList(final com.aliyun.ros.cdk.core.IResolvable groupList) {
            this.props.groupList(groupList);
            return this;
        }

        /**
         * @return {@code this}
         * @param ingressOptions This parameter is required.
         */
        public Builder ingressOptions(final com.aliyun.ros.cdk.core.IResolvable ingressOptions) {
            this.props.ingressOptions(ingressOptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param ingressOptions This parameter is required.
         */
        public Builder ingressOptions(final com.aliyun.ros.cdk.mse.RosServiceSource.IngressOptionsProperty ingressOptions) {
            this.props.ingressOptions(ingressOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param pathList This parameter is required.
         */
        public Builder pathList(final java.util.List<? extends java.lang.Object> pathList) {
            this.props.pathList(pathList);
            return this;
        }
        /**
         * @return {@code this}
         * @param pathList This parameter is required.
         */
        public Builder pathList(final com.aliyun.ros.cdk.core.IResolvable pathList) {
            this.props.pathList(pathList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mse.RosServiceSource}.
         */
        @Override
        public com.aliyun.ros.cdk.mse.RosServiceSource build() {
            return new com.aliyun.ros.cdk.mse.RosServiceSource(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
