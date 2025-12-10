package com.aliyun.ros.cdk.cen;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CEN::TransitRouterPeerAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.173Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosTransitRouterPeerAttachment")
public class RosTransitRouterPeerAttachment extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTransitRouterPeerAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTransitRouterPeerAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachment.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTransitRouterPeerAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachmentProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterAttachmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getPeerTransitRouterId() {
        return software.amazon.jsii.Kernel.get(this, "peerTransitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeerTransitRouterId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "peerTransitRouterId", java.util.Objects.requireNonNull(value, "peerTransitRouterId is required"));
    }

    /**
     */
    public void setPeerTransitRouterId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "peerTransitRouterId", java.util.Objects.requireNonNull(value, "peerTransitRouterId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoPublishRouteEnabled() {
        return software.amazon.jsii.Kernel.get(this, "autoPublishRouteEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoPublishRouteEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoPublishRouteEnabled", value);
    }

    /**
     */
    public void setAutoPublishRouteEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoPublishRouteEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBandwidth(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "bandwidth", value);
    }

    /**
     */
    public void setBandwidth(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bandwidth", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBandwidthType() {
        return software.amazon.jsii.Kernel.get(this, "bandwidthType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBandwidthType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bandwidthType", value);
    }

    /**
     */
    public void setBandwidthType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bandwidthType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCenBandwidthPackageId() {
        return software.amazon.jsii.Kernel.get(this, "cenBandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCenBandwidthPackageId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cenBandwidthPackageId", value);
    }

    /**
     */
    public void setCenBandwidthPackageId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cenBandwidthPackageId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCenId() {
        return software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCenId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cenId", value);
    }

    /**
     */
    public void setCenId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cenId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDefaultLinkType() {
        return software.amazon.jsii.Kernel.get(this, "defaultLinkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDefaultLinkType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "defaultLinkType", value);
    }

    /**
     */
    public void setDefaultLinkType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "defaultLinkType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeerTransitRouterRegionId() {
        return software.amazon.jsii.Kernel.get(this, "peerTransitRouterRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeerTransitRouterRegionId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "peerTransitRouterRegionId", value);
    }

    /**
     */
    public void setPeerTransitRouterRegionId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "peerTransitRouterRegionId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachment.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachment.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachment.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachment.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterAttachmentDescription() {
        return software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTransitRouterAttachmentDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterAttachmentDescription", value);
    }

    /**
     */
    public void setTransitRouterAttachmentDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterAttachmentDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterAttachmentName() {
        return software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTransitRouterAttachmentName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterAttachmentName", value);
    }

    /**
     */
    public void setTransitRouterAttachmentName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterAttachmentName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterId() {
        return software.amazon.jsii.Kernel.get(this, "transitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTransitRouterId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterId", value);
    }

    /**
     */
    public void setTransitRouterId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosTransitRouterPeerAttachment.TagsProperty")
    @software.amazon.jsii.Jsii.Proxy(TagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TagsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.RosTransitRouterPeerAttachment.TagsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagsProperty.Jsii$Proxy that = (TagsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachment> {
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
        private final com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachmentProps.Builder();
        }

        /**
         * @return {@code this}
         * @param peerTransitRouterId This parameter is required.
         */
        public Builder peerTransitRouterId(final java.lang.String peerTransitRouterId) {
            this.props.peerTransitRouterId(peerTransitRouterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param peerTransitRouterId This parameter is required.
         */
        public Builder peerTransitRouterId(final com.aliyun.ros.cdk.core.IResolvable peerTransitRouterId) {
            this.props.peerTransitRouterId(peerTransitRouterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoPublishRouteEnabled This parameter is required.
         */
        public Builder autoPublishRouteEnabled(final java.lang.Boolean autoPublishRouteEnabled) {
            this.props.autoPublishRouteEnabled(autoPublishRouteEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoPublishRouteEnabled This parameter is required.
         */
        public Builder autoPublishRouteEnabled(final com.aliyun.ros.cdk.core.IResolvable autoPublishRouteEnabled) {
            this.props.autoPublishRouteEnabled(autoPublishRouteEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param bandwidth This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }
        /**
         * @return {@code this}
         * @param bandwidth This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }

        /**
         * @return {@code this}
         * @param bandwidthType This parameter is required.
         */
        public Builder bandwidthType(final java.lang.String bandwidthType) {
            this.props.bandwidthType(bandwidthType);
            return this;
        }
        /**
         * @return {@code this}
         * @param bandwidthType This parameter is required.
         */
        public Builder bandwidthType(final com.aliyun.ros.cdk.core.IResolvable bandwidthType) {
            this.props.bandwidthType(bandwidthType);
            return this;
        }

        /**
         * @return {@code this}
         * @param cenBandwidthPackageId This parameter is required.
         */
        public Builder cenBandwidthPackageId(final java.lang.String cenBandwidthPackageId) {
            this.props.cenBandwidthPackageId(cenBandwidthPackageId);
            return this;
        }
        /**
         * @return {@code this}
         * @param cenBandwidthPackageId This parameter is required.
         */
        public Builder cenBandwidthPackageId(final com.aliyun.ros.cdk.core.IResolvable cenBandwidthPackageId) {
            this.props.cenBandwidthPackageId(cenBandwidthPackageId);
            return this;
        }

        /**
         * @return {@code this}
         * @param cenId This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * @return {@code this}
         * @param cenId This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * @return {@code this}
         * @param defaultLinkType This parameter is required.
         */
        public Builder defaultLinkType(final java.lang.String defaultLinkType) {
            this.props.defaultLinkType(defaultLinkType);
            return this;
        }
        /**
         * @return {@code this}
         * @param defaultLinkType This parameter is required.
         */
        public Builder defaultLinkType(final com.aliyun.ros.cdk.core.IResolvable defaultLinkType) {
            this.props.defaultLinkType(defaultLinkType);
            return this;
        }

        /**
         * @return {@code this}
         * @param peerTransitRouterRegionId This parameter is required.
         */
        public Builder peerTransitRouterRegionId(final java.lang.String peerTransitRouterRegionId) {
            this.props.peerTransitRouterRegionId(peerTransitRouterRegionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param peerTransitRouterRegionId This parameter is required.
         */
        public Builder peerTransitRouterRegionId(final com.aliyun.ros.cdk.core.IResolvable peerTransitRouterRegionId) {
            this.props.peerTransitRouterRegionId(peerTransitRouterRegionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachment.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param transitRouterAttachmentDescription This parameter is required.
         */
        public Builder transitRouterAttachmentDescription(final java.lang.String transitRouterAttachmentDescription) {
            this.props.transitRouterAttachmentDescription(transitRouterAttachmentDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param transitRouterAttachmentDescription This parameter is required.
         */
        public Builder transitRouterAttachmentDescription(final com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentDescription) {
            this.props.transitRouterAttachmentDescription(transitRouterAttachmentDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param transitRouterAttachmentName This parameter is required.
         */
        public Builder transitRouterAttachmentName(final java.lang.String transitRouterAttachmentName) {
            this.props.transitRouterAttachmentName(transitRouterAttachmentName);
            return this;
        }
        /**
         * @return {@code this}
         * @param transitRouterAttachmentName This parameter is required.
         */
        public Builder transitRouterAttachmentName(final com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentName) {
            this.props.transitRouterAttachmentName(transitRouterAttachmentName);
            return this;
        }

        /**
         * @return {@code this}
         * @param transitRouterId This parameter is required.
         */
        public Builder transitRouterId(final java.lang.String transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param transitRouterId This parameter is required.
         */
        public Builder transitRouterId(final com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachment build() {
            return new com.aliyun.ros.cdk.cen.RosTransitRouterPeerAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
