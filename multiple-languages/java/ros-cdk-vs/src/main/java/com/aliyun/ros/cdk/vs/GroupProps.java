package com.aliyun.ros.cdk.vs;

/**
 * Properties for defining a `ALIYUN::VS::Group`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:27.307Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vs.$Module.class, fqn = "@alicloud/ros-cdk-vs.GroupProps")
@software.amazon.jsii.Jsii.Proxy(GroupProps.Jsii$Proxy.class)
public interface GroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property inProtocol: Access protocol used by the space.
     * <p>
     * Value: gb28181, rtmp
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInProtocol();

    /**
     * Property name: Space name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property outProtocol: Play protocol used by the space, multivalued separated by commas.
     * <p>
     * Value: flv, hls, rtmp
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOutProtocol();

    /**
     * Property playDomain: Use of the domain name space broadcast stream.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPlayDomain();

    /**
     * Property pushDomain: Plug flow domain name space to use.
     * <p>
     * (Only access to the space rtmp)
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPushDomain();

    /**
     * Property region: Space belongs to the region, as a service center.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRegion();

    /**
     * Property app: Application name space used, the default live.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApp() {
        return null;
    }

    /**
     * Property callback: Updating the space callback device / flow state.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCallback() {
        return null;
    }

    /**
     * Property description: Space description.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property enabled: Space is enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnabled() {
        return null;
    }

    /**
     * Property lazyPull: Whether to enable on-demand pull flow, default false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLazyPull() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link GroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link GroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<GroupProps> {
        java.lang.Object inProtocol;
        java.lang.Object name;
        java.lang.Object outProtocol;
        java.lang.Object playDomain;
        java.lang.Object pushDomain;
        java.lang.Object region;
        java.lang.Object app;
        java.lang.Object callback;
        java.lang.Object description;
        java.lang.Object enabled;
        java.lang.Object lazyPull;

        /**
         * Sets the value of {@link GroupProps#getInProtocol}
         * @param inProtocol Property inProtocol: Access protocol used by the space. This parameter is required.
         *                   Value: gb28181, rtmp
         * @return {@code this}
         */
        public Builder inProtocol(java.lang.String inProtocol) {
            this.inProtocol = inProtocol;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getInProtocol}
         * @param inProtocol Property inProtocol: Access protocol used by the space. This parameter is required.
         *                   Value: gb28181, rtmp
         * @return {@code this}
         */
        public Builder inProtocol(com.aliyun.ros.cdk.core.IResolvable inProtocol) {
            this.inProtocol = inProtocol;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getName}
         * @param name Property name: Space name. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getName}
         * @param name Property name: Space name. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getOutProtocol}
         * @param outProtocol Property outProtocol: Play protocol used by the space, multivalued separated by commas. This parameter is required.
         *                    Value: flv, hls, rtmp
         * @return {@code this}
         */
        public Builder outProtocol(java.lang.String outProtocol) {
            this.outProtocol = outProtocol;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getOutProtocol}
         * @param outProtocol Property outProtocol: Play protocol used by the space, multivalued separated by commas. This parameter is required.
         *                    Value: flv, hls, rtmp
         * @return {@code this}
         */
        public Builder outProtocol(com.aliyun.ros.cdk.core.IResolvable outProtocol) {
            this.outProtocol = outProtocol;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getPlayDomain}
         * @param playDomain Property playDomain: Use of the domain name space broadcast stream. This parameter is required.
         * @return {@code this}
         */
        public Builder playDomain(java.lang.String playDomain) {
            this.playDomain = playDomain;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getPlayDomain}
         * @param playDomain Property playDomain: Use of the domain name space broadcast stream. This parameter is required.
         * @return {@code this}
         */
        public Builder playDomain(com.aliyun.ros.cdk.core.IResolvable playDomain) {
            this.playDomain = playDomain;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getPushDomain}
         * @param pushDomain Property pushDomain: Plug flow domain name space to use. This parameter is required.
         *                   (Only access to the space rtmp)
         * @return {@code this}
         */
        public Builder pushDomain(java.lang.String pushDomain) {
            this.pushDomain = pushDomain;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getPushDomain}
         * @param pushDomain Property pushDomain: Plug flow domain name space to use. This parameter is required.
         *                   (Only access to the space rtmp)
         * @return {@code this}
         */
        public Builder pushDomain(com.aliyun.ros.cdk.core.IResolvable pushDomain) {
            this.pushDomain = pushDomain;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getRegion}
         * @param region Property region: Space belongs to the region, as a service center. This parameter is required.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getRegion}
         * @param region Property region: Space belongs to the region, as a service center. This parameter is required.
         * @return {@code this}
         */
        public Builder region(com.aliyun.ros.cdk.core.IResolvable region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getApp}
         * @param app Property app: Application name space used, the default live.
         * @return {@code this}
         */
        public Builder app(java.lang.String app) {
            this.app = app;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getApp}
         * @param app Property app: Application name space used, the default live.
         * @return {@code this}
         */
        public Builder app(com.aliyun.ros.cdk.core.IResolvable app) {
            this.app = app;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getCallback}
         * @param callback Property callback: Updating the space callback device / flow state.
         * @return {@code this}
         */
        public Builder callback(java.lang.String callback) {
            this.callback = callback;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getCallback}
         * @param callback Property callback: Updating the space callback device / flow state.
         * @return {@code this}
         */
        public Builder callback(com.aliyun.ros.cdk.core.IResolvable callback) {
            this.callback = callback;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getDescription}
         * @param description Property description: Space description.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getDescription}
         * @param description Property description: Space description.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getEnabled}
         * @param enabled Property enabled: Space is enabled.
         * @return {@code this}
         */
        public Builder enabled(java.lang.Boolean enabled) {
            this.enabled = enabled;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getEnabled}
         * @param enabled Property enabled: Space is enabled.
         * @return {@code this}
         */
        public Builder enabled(com.aliyun.ros.cdk.core.IResolvable enabled) {
            this.enabled = enabled;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getLazyPull}
         * @param lazyPull Property lazyPull: Whether to enable on-demand pull flow, default false.
         * @return {@code this}
         */
        public Builder lazyPull(java.lang.Boolean lazyPull) {
            this.lazyPull = lazyPull;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getLazyPull}
         * @param lazyPull Property lazyPull: Whether to enable on-demand pull flow, default false.
         * @return {@code this}
         */
        public Builder lazyPull(com.aliyun.ros.cdk.core.IResolvable lazyPull) {
            this.lazyPull = lazyPull;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link GroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public GroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link GroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GroupProps {
        private final java.lang.Object inProtocol;
        private final java.lang.Object name;
        private final java.lang.Object outProtocol;
        private final java.lang.Object playDomain;
        private final java.lang.Object pushDomain;
        private final java.lang.Object region;
        private final java.lang.Object app;
        private final java.lang.Object callback;
        private final java.lang.Object description;
        private final java.lang.Object enabled;
        private final java.lang.Object lazyPull;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.inProtocol = software.amazon.jsii.Kernel.get(this, "inProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.outProtocol = software.amazon.jsii.Kernel.get(this, "outProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.playDomain = software.amazon.jsii.Kernel.get(this, "playDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pushDomain = software.amazon.jsii.Kernel.get(this, "pushDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.app = software.amazon.jsii.Kernel.get(this, "app", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.callback = software.amazon.jsii.Kernel.get(this, "callback", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enabled = software.amazon.jsii.Kernel.get(this, "enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lazyPull = software.amazon.jsii.Kernel.get(this, "lazyPull", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.inProtocol = java.util.Objects.requireNonNull(builder.inProtocol, "inProtocol is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.outProtocol = java.util.Objects.requireNonNull(builder.outProtocol, "outProtocol is required");
            this.playDomain = java.util.Objects.requireNonNull(builder.playDomain, "playDomain is required");
            this.pushDomain = java.util.Objects.requireNonNull(builder.pushDomain, "pushDomain is required");
            this.region = java.util.Objects.requireNonNull(builder.region, "region is required");
            this.app = builder.app;
            this.callback = builder.callback;
            this.description = builder.description;
            this.enabled = builder.enabled;
            this.lazyPull = builder.lazyPull;
        }

        @Override
        public final java.lang.Object getInProtocol() {
            return this.inProtocol;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getOutProtocol() {
            return this.outProtocol;
        }

        @Override
        public final java.lang.Object getPlayDomain() {
            return this.playDomain;
        }

        @Override
        public final java.lang.Object getPushDomain() {
            return this.pushDomain;
        }

        @Override
        public final java.lang.Object getRegion() {
            return this.region;
        }

        @Override
        public final java.lang.Object getApp() {
            return this.app;
        }

        @Override
        public final java.lang.Object getCallback() {
            return this.callback;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEnabled() {
            return this.enabled;
        }

        @Override
        public final java.lang.Object getLazyPull() {
            return this.lazyPull;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("inProtocol", om.valueToTree(this.getInProtocol()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("outProtocol", om.valueToTree(this.getOutProtocol()));
            data.set("playDomain", om.valueToTree(this.getPlayDomain()));
            data.set("pushDomain", om.valueToTree(this.getPushDomain()));
            data.set("region", om.valueToTree(this.getRegion()));
            if (this.getApp() != null) {
                data.set("app", om.valueToTree(this.getApp()));
            }
            if (this.getCallback() != null) {
                data.set("callback", om.valueToTree(this.getCallback()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEnabled() != null) {
                data.set("enabled", om.valueToTree(this.getEnabled()));
            }
            if (this.getLazyPull() != null) {
                data.set("lazyPull", om.valueToTree(this.getLazyPull()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vs.GroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            GroupProps.Jsii$Proxy that = (GroupProps.Jsii$Proxy) o;

            if (!inProtocol.equals(that.inProtocol)) return false;
            if (!name.equals(that.name)) return false;
            if (!outProtocol.equals(that.outProtocol)) return false;
            if (!playDomain.equals(that.playDomain)) return false;
            if (!pushDomain.equals(that.pushDomain)) return false;
            if (!region.equals(that.region)) return false;
            if (this.app != null ? !this.app.equals(that.app) : that.app != null) return false;
            if (this.callback != null ? !this.callback.equals(that.callback) : that.callback != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.enabled != null ? !this.enabled.equals(that.enabled) : that.enabled != null) return false;
            return this.lazyPull != null ? this.lazyPull.equals(that.lazyPull) : that.lazyPull == null;
        }

        @Override
        public final int hashCode() {
            int result = this.inProtocol.hashCode();
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.outProtocol.hashCode());
            result = 31 * result + (this.playDomain.hashCode());
            result = 31 * result + (this.pushDomain.hashCode());
            result = 31 * result + (this.region.hashCode());
            result = 31 * result + (this.app != null ? this.app.hashCode() : 0);
            result = 31 * result + (this.callback != null ? this.callback.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.enabled != null ? this.enabled.hashCode() : 0);
            result = 31 * result + (this.lazyPull != null ? this.lazyPull.hashCode() : 0);
            return result;
        }
    }
}
