package com.aliyun.ros.cdk.vs;

/**
 * Properties for defining a <code>ALIYUN::VS::Group</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:37.825Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vs.$Module.class, fqn = "@alicloud/ros-cdk-vs.RosGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosGroupProps.Jsii$Proxy.class)
public interface RosGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInProtocol();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOutProtocol();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPlayDomain();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPushDomain();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRegion();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCallback() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLazyPull() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosGroupProps> {
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
         * Sets the value of {@link RosGroupProps#getInProtocol}
         * @param inProtocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder inProtocol(java.lang.String inProtocol) {
            this.inProtocol = inProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getInProtocol}
         * @param inProtocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder inProtocol(com.aliyun.ros.cdk.core.IResolvable inProtocol) {
            this.inProtocol = inProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getOutProtocol}
         * @param outProtocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder outProtocol(java.lang.String outProtocol) {
            this.outProtocol = outProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getOutProtocol}
         * @param outProtocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder outProtocol(com.aliyun.ros.cdk.core.IResolvable outProtocol) {
            this.outProtocol = outProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getPlayDomain}
         * @param playDomain the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder playDomain(java.lang.String playDomain) {
            this.playDomain = playDomain;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getPlayDomain}
         * @param playDomain the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder playDomain(com.aliyun.ros.cdk.core.IResolvable playDomain) {
            this.playDomain = playDomain;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getPushDomain}
         * @param pushDomain the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder pushDomain(java.lang.String pushDomain) {
            this.pushDomain = pushDomain;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getPushDomain}
         * @param pushDomain the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder pushDomain(com.aliyun.ros.cdk.core.IResolvable pushDomain) {
            this.pushDomain = pushDomain;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getRegion}
         * @param region the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getRegion}
         * @param region the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder region(com.aliyun.ros.cdk.core.IResolvable region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getApp}
         * @param app the value to be set.
         * @return {@code this}
         */
        public Builder app(java.lang.String app) {
            this.app = app;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getApp}
         * @param app the value to be set.
         * @return {@code this}
         */
        public Builder app(com.aliyun.ros.cdk.core.IResolvable app) {
            this.app = app;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getCallback}
         * @param callback the value to be set.
         * @return {@code this}
         */
        public Builder callback(java.lang.String callback) {
            this.callback = callback;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getCallback}
         * @param callback the value to be set.
         * @return {@code this}
         */
        public Builder callback(com.aliyun.ros.cdk.core.IResolvable callback) {
            this.callback = callback;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getEnabled}
         * @param enabled the value to be set.
         * @return {@code this}
         */
        public Builder enabled(java.lang.Boolean enabled) {
            this.enabled = enabled;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getEnabled}
         * @param enabled the value to be set.
         * @return {@code this}
         */
        public Builder enabled(com.aliyun.ros.cdk.core.IResolvable enabled) {
            this.enabled = enabled;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getLazyPull}
         * @param lazyPull the value to be set.
         * @return {@code this}
         */
        public Builder lazyPull(java.lang.Boolean lazyPull) {
            this.lazyPull = lazyPull;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getLazyPull}
         * @param lazyPull the value to be set.
         * @return {@code this}
         */
        public Builder lazyPull(com.aliyun.ros.cdk.core.IResolvable lazyPull) {
            this.lazyPull = lazyPull;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosGroupProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vs.RosGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosGroupProps.Jsii$Proxy that = (RosGroupProps.Jsii$Proxy) o;

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
